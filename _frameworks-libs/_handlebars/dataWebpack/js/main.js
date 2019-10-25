const dataTemplate = require("./dataTemplate.hbs");

const dataRequest = new XMLHttpRequest();
dataRequest.open('GET', 'https://tmm-nov.s3.amazonaws.com/data/coins_BTCUSD.json');
dataRequest.onload = function() {
    if (dataRequest.status >=200 && dataRequest.status < 400) {
        let data = JSON.parse(dataRequest.responseText);  
         
        console.log(data); 
        createHTML(data);
    } else {
        console.log("error, no data ...");
    }
};
dataRequest.onerror = function() {
    console.log("connection errror");
};
dataRequest.send();

// Handlebars.registerHelper("calculateNetGain", function(Close, Open) {
//     if (Close - Open >= 0) {
//         return `Net Gain: Positive`
//     } else {
//         return `Net Gain: Negative`
//     }
// })
function createHTML(coinData) {
   
    let coinContainer = document.getElementById("coin-container");
    coinContainer.innerHTML = dataTemplate(coinData);
  
    // let rawTemplate = document.getElementById("coinTemplate").innerHTML;
    // let compiledTemplate = Handlebars.compile(rawTemplate);
    // let generatedTemplate = compiledTemplate(coinData);

   
}