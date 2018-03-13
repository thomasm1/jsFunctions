    var body = d3.select("body"), duration = 3000;

    var div = body.append("div")
            .classed("box", true)
            .style("background-color", "steelblue")
            .style("color", "white")
            .text("waiting") // <-A
        .transition().duration(duration) // <-B
                .delay(1000) // <-C
                .on("start", function(){ // <-D
                    d3.select(this).text(function (d, i) {
                        return "transitioning";
                    });
                })
                .on("end", function(){ // <-E
                    d3.select(this).text(function (d, i) {
                        return "done";
                    });
                })
            .style("margin-left", "600px");
