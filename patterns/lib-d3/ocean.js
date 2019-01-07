var canvas = d3.select("canvas"),
    context = canvas.node().getContext("2d"),
    width = canvas.property("width"),
    height = canvas.property("height");

var lambda = d3.scaleLinear()
    .domain([0, width])
    .range([-180, 180]);

var phi = d3.scaleLinear()
    .domain([0, height])
    .range([90, -90]);

var projection = d3.geoInterruptedHomolosine()
    .translate([width / 2, height / 2]);

var path = d3.geoPath()
    .projection(projection)
    .context(context);

d3.json("../../../data/world-110m.v1.json", function(error, world) {
  if (error) throw error;

  var land = topojson.feature(world, world.objects.land),
      sphere = {type: "Sphere"},
      touch = "ontouchstart" in window;

  canvas.on(touch ? "touchmove" : "mousemove", move);

  draw();

  function move() {
    var p = touch ? d3.touches(this)[0] : d3.mouse(this);
    projection.rotate([lambda(p[0]), phi(p[1])]), draw();
    d3.event.preventDefault();
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    context.save();
    context.beginPath();
    path(sphere);
    context.fillStyle = "lightskyblue";
    context.fill();
    context.clip();
    context.beginPath();
    path(land);
    context.fillStyle = "steelblue";
    context.fill();
    context.restore();
    context.beginPath();
    path(sphere);
    context.stroke();
  }
});
