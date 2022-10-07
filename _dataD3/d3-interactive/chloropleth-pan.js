
var width = 480,
height = 500;

var rateById = d3.map();

var quantile = d3.scale.quantile()
.range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

var projection = d3.geo.albersUsa()
.scale(680)
.translate([width / 2, height / 2]);

var projectionzoom = d3.geo.albersUsa()
.scale(4000)
.translate([width / 2, height / 2]);

var path = d3.geo.path()
.projection(projection);

var pathzoom = d3.geo.path()
.projection(projectionzoom);

var svg = d3.select("#main").append("svg")
.attr("width", width)
.attr("height", height)
.on("mouseover", function() {
  var point = projectionzoom(projection.invert(d3.mouse(this))); 
  svgzoom.attr("transform", "translate(" + (width/2-point[0]) + "," + (height/2-point[1]) + ")")
});

var svgzoom = d3.select("#zoom").append("svg")
.attr("width", width)
.attr("height", height)
.append("g");

queue()
.defer(d3.json, "us.json")  // "mbostock/raw/4090846/us.json")
.defer(d3.tsv, "unemployment.tsv", function(d) { rateById.set(d.id, +d.rate); })
.await(ready);

function ready(error, us) {
if (error) throw error;

quantile.domain(rateById.values());

svg.append("rect")
.style("fill", "#fff")
.attr("width", width)
.attr("height", height)

svg.append("g")
  .attr("class", "counties")
.selectAll("path")
  .data(topojson.feature(us, us.objects.counties).features)
.enter().append("path")
  .attr("class", function(d) { return quantile(rateById.get(d.id)); })
  .attr("d", path);

svg.append("path")
  .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
  .attr("class", "states")
  .attr("d", path);

svgzoom.append("rect")
.style("fill", "#fff")
.attr("width", width)
.attr("height", height)

svgzoom.append("g")
  .attr("class", "counties")
.selectAll("path")
  .data(topojson.feature(us, us.objects.counties).features)
.enter().append("path")
  .attr("class", function(d) { return quantile(rateById.get(d.id)); })
  .attr("d", pathzoom);

svgzoom.append("path")
  .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
  .attr("class", "states")
  .attr("d", pathzoom);

}