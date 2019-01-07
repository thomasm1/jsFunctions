var data = [10, 15, 30, 50, 80, 65, 55, 30, 20, 10, 8]; // <- A
                    
function render(data) { // <- B
    var bars = d3.selectAll(".map0").selectAll("div.h-bar") // <- C
            .data(data); // Update <- D

    // Enter
    bars.enter() // <- E
            .append("div") // <- F
                .attr("class", "h-bar") // <- G
        .merge(bars) // Enter + Update <- H
            .style("width", function (d) {
                return (d * 5) + "px"; // <- I
            })
            .style("opacity", function (d) {
                return (d * .01);
            })  
            .text(function (d) {
                return d; // <- J
            });


    // Exit
    bars.exit() // <- K
            .remove();
}

setInterval(function () { // <- L
    data.shift();
    data.push(Math.round(Math.random() * 100));
    render(data);
}, 
1000);

render(data);