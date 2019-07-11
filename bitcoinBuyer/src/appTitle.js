
function TitleWidget(spec) {
    var instance = {};
    var headline, desc;
  
    instance.render = function() {
      var div = d3.select(".appTitle").append("div");
      div.append("h3").text(headline);
      div
        .attr("class", "box")
        // .attr("style", "color:" + spec.color)
        .attr(
          "style",
          "background-color: " +
            spec.backgroundColor +
            "color:" +
            spec.color +
            "width:" +
            spec.width +
            "%;",
          +"height:" + spec.minHeight
        )
        .append("p")
        .text(desc);
      return instance;
    };
    instance.headline = function(h) {
      if (!arguments.length) return headline;
      headline = h;
      return instance;
    };
    instance.desc = function(d) {
      if (!arguments.length) return desc;
      desc = d;
      return instance;
    };
    return instance;
  } // end TitleWidget
  
  var widget = new TitleWidget({
    color: "red;",
    backgroundColor: "skyblue;",
    width: "100"
  })
    .headline("Arrays Vanilla!")
    .desc("BitcoinBuilder");
  
  var subWidget = new TitleWidget({
    color: "blue;",
    backgroundColor: "skyblue;",
    width: "50",
    minHeight: "300px"
  })
    .headline("Contents:")
    .desc("Binary Tree Search Algorith");
  
  widget.render();
  subWidget.render();
  