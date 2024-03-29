    var data = [ // <-A
            {name: 'Linear', fn: d3.easeLinear},
            {name: 'Cubic', fn: d3.easeCubic},
            {name: 'CubicIn', fn: d3.easeCubicIn},
            {name: 'Sin', fn: d3.easeSin},
            {name: 'SinIn', fn: d3.easeSinIn},
            {name: 'Exp', fn: d3.easeExp},
            {name: 'Circle', fn: d3.easeCircle},
            {name: 'Back', fn: d3.easeBack},
            {name: 'Bounce', fn: d3.easeBounce},
            {name: 'Elastic', fn: d3.easeElastic},
            {name: 'Custom', fn: function(t){ return t * t; }}// <-B
        ],
        colors = d3.scaleOrdinal(d3.schemeCategory20);

    d3.select("body").selectAll("div")
            .data(data) // <-C
        .enter()
        .append("div")
            .attr("class", "fixed-cell")
            .style("top", function (d, i) {
                return i * 40 + "px";
            })
            .style("background-color", function (d, i) {
                return colors(i);
            })
            .style("color", "white")
            .style("left", "500px")
            .text(function (d) {
                return d.name;
            });

    d3.selectAll("div").each(function(d){
        d3.select(this)
                .transition().ease(d.fn) // <-D
            .duration(1500)
            .style("left", "10px");
    });

    /*********************
    d3.selectAll("div").transition().ease(d.fn) // does not work
        .duration(1500)
        .style("left", "10px");
    *********************/
