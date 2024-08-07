    var id= 0,
        data = [],
        duration = 500,
        chartHeight = 100,
        chartWidth = 680;

    for(var i = 0; i < 20; i++) push(data);

    function render(data) {
        var selection = d3.select("body")
                .selectAll("div.v-bar")
                .data(data, function(d){return d.id;}); // <-A

        // enter
        selection.enter()
                .append("div")
                .attr("class", "v-bar")
                .style("z-index", "0")
                .style("position", "fixed")
                .style("top", chartHeight + "px")
                .style("left", function(d, i){
                    return barLeft(i+1) + "px"; // <-B
                })
                .style("height", "0px") // <-C
                .append("span");

        // update
        selection
                .transition().duration(duration) // <-D
                .style("top", function (d) {
                    return chartHeight - barHeight(d) + "px";
                })
                .style("left", function(d, i){
                    return barLeft(i) + "px";
                })
                .style("height", function (d) {
                    return barHeight(d) + "px";
                })
                .select("span")
                .text(function (d) {return d.value;});

        // exit
        selection.exit()
                .transition().duration(duration) // <-E
                .style("left", function(d, i){
                    return barLeft(-1) + "px"; //<-F
                })
                .remove(); // <-G
    }

    function push(data) {
        data.push({
            id: ++id,
            value: Math.round(Math.random() * chartHeight)
        });
    }

    function barLeft(i) {
        return i * (30 + 2);
    }

    function barHeight(d) {
        return d.value;
    }

    setInterval(function () {
        data.shift();
        push(data);
        render(data);
    }, 2000);

    render(data);

    d3.select("body")
       .append("div")
           .attr("class", "baseline")
           .style("position", "fixed")
           .style("z-index", "1")
           .style("top", chartHeight + "px")
           .style("left", "0px")
           .style("width", chartWidth + "px");
