let title = `Bitcoin Buyer Console: Phase I, Raw Materials`;
let tocTitle = ` Guiding Inspiration for Bitcoin Buyer:`
let toc = ` 
“Typically, momentum trading is effective in markets that 1) do not have valuation models, 2) have large amounts of volatility, and 3) have frequent mispricings. Momentum investing is not typically used in US stocks, bonds, or options – as they have clear valuation models (e.g. discounted cash flow analysis for stocks and black Scholes for options). However, for commodities and assets like crypto – momentum trading can be an effective strategy that allows protection from losses in downtrends and capture subside on the uptrends. Based on historical data, this may be an extremely effective strategy – until a valuation model has been figured out.” <sup>1</sup><br />
<br /> 
[using a strategy to]
"... create deep reinforcement learning agents that learn to make money trading Bitcoin. <br />
... to experiment with state-of-the-art deep reinforcement learning technologies to see if we can create profitable Bitcoin trading bots. It seems to be the status quo to quickly shut down any attempts to create reinforcement learning algorithms, as it is “the wrong way to go about building a trading algorithm”. However, recent advances in the field have shown that RL agents are often capable of learning much more than supervised learning agents within the same problem domain." <sup>2</sup><br />
<br />

1. https://www.coindesk.com/set-protocol-launches-momentum-trading-strategy<br /><br />
2: https://towardsdatascience.com/creating-bitcoin-trading-bots-that-dont-lose-money-2e7165fb0b29<br /><br />
 
data from: 07-04-2019<br />
source -https://www.cryptodatadownload.com/data/northamerican/`;


function TitleWidget(spec) {
    var instance = {};
    var headline, desc;

    instance.render = function() {
        var div = d3.select(".appTitle").append("div");
        div.append("h3").text(headline)
            .attr(
                "style",
                "text-align:" +
                spec.titleTextAlign
            );
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
                "%;" +
                "max-height:" +
                spec.maxHeight +
                "overflow-y:" +
                spec.overflowY +
                "text-align:" +
                spec.textAlign +
                "padding:" +
                spec.padding
            )
            .append("p")
            .html(desc);
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
        color: "darkblue;",
        backgroundColor: "rgba(135, 207, 235, 0.575);",
        width: "100"
    })
    .headline(title);

var subWidget = new TitleWidget({
        color: "blue;",
        backgroundColor: "rgba(135, 207, 235, 0.575);",
        width: "100",
        margin: "0",
        maxHeight: "200px;",
        overflowY: "scroll;",
        textAlign: "justify;",
        titleTextAlign: "center;",
        padding: "0px 10px;"
    })
    .headline(tocTitle)
    .desc(toc);

widget.render();
subWidget.render();