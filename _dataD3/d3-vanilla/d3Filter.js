   var data = ["Cat", "Dog", "Cat", "Dog", "Cat", "Dog", "Cat", "Dog"],
        duration = 1500;

    d3.select("body").selectAll("div")
            .data(data)
        .enter()
        .append("div")
            .attr("class", "fixed-cell")
            .style("top", function (d, i) {
                return i * 40 + "px";
            })
            .style("background-color", "steelblue")
            .style("color", "white")
            .style("left", "500px")
            .text(function (d) {
                return d;
            })
            .transition() // <- A
                .duration(duration)
                    .style("left", "10px")
            .filter(function(d){return d == "Cat";}) // <- B
                .transition() // <- C
                .duration(duration)
                    .style("left", "500px");
