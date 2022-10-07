    var body = d3.select("two");
        
    function teleport(s){
        s.transition().duration(1000) // <-A
            .style("width", "200px")
            .style("height", "1px")
        .transition().duration(500) // <-B
            .style("left", "600px")
        .transition().duration(1000) // <-C
            .style("left", "800px")
            .style("height", "80px")
            .style("width", "80px");
    }
    
    body.append("div")    
            .style("position", "fixed")
            .style("background-color", "steelblue")
            .style("left", "10px")
            .style("width", "80px")
            .style("height", "80px")
            .call(teleport); // <-D    
