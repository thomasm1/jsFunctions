console.log("%c BITCOIN CALCS BEGIN: ", "color:white; background-color:orange")

document.getElementById("app").innerHTML = `
<h1>Arrays Vanilla!</h1>
<div>
data from 07-04-2019<br />
source -https://www.cryptodatadownload.com/data/northamerican/
</div>
`;
const btc2019 = [
  {
    Date: "2019-07-04",
    Symbol: "BTCUSD",
    Open: 11976.42,
    High: 12064.26,
    Low: 11820,
    Close: 11909.55,
    "Volume BTC": 1237.57,
    "Volume USD": 14790355.69
  },
  {
    Date: "2019-07-03",
    Symbol: "BTCUSD",
    Open: 10829.18,
    High: 12014.6,
    Low: 10829.18,
    Close: 11976.42,
    "Volume BTC": 36836.85,
    "Volume USD": 419076229.34
  },
  {
    Date: "2019-07-02",
    Symbol: "BTCUSD",
    Open: 10577.63,
    High: 10925,
    Low: 9651,
    Close: 10829.18,
    "Volume BTC": 41476.42,
    "Volume USD": 424791613.92
  },
  {
    Date: "2019-07-01",
    Symbol: "BTCUSD",
    Open: 10761.26,
    High: 11210.52,
    Low: 9953,
    Close: 10577.63,
    "Volume BTC": 37633.9,
    "Volume USD": 396857365.17
  }
];

const ethBtc = [
  {
    Date: "2019-07-04",
    Symbol: "BTCUSD",
    Open: 11976.42,
    High: 12064.26,
    Low: 11820,
    Close: 11909.55,
    "Volume BTC": 1237.57,
    "Volume USD": 14790355.69
  },
  {
    Date: "2019-07-03",
    Symbol: "BTCUSD",
    Open: 10829.18,
    High: 12014.6,
    Low: 10829.18,
    Close: 11976.42,
    "Volume BTC": 36836.85,
    "Volume USD": 419076229.34
  },
  {
    Date: "2019-07-02",
    Symbol: "BTCUSD",
    Open: 10577.63,
    High: 10925,
    Low: 9651,
    Close: 10829.18,
    "Volume BTC": 41476.42,
    "Volume USD": 424791613.92
  },
  {
    Date: "2019-07-01",
    Symbol: "BTCUSD",
    Open: 10761.26,
    High: 11210.52,
    Low: 9953,
    Close: 10577.63,
    "Volume BTC": 37633.9,
    "Volume USD": 396857365.17
  },
  {
    Date: "2019-07-04",
    Symbol: "ETHUSD",
    Open: 301.79,
    High: 304,
    Low: 300.39,
    Close: 301.5,
    "Volume ETH": 3825.69,
    "Volume USD": 1154988.12
  },
  {
    Date: "2019-07-03",
    Symbol: "ETHUSD",
    Open: 291.25,
    High: 303.83,
    Low: 289.61,
    Close: 301.79,
    "Volume ETH": 105691.96,
    "Volume USD": 31264397.55
  },
  {
    Date: "2019-07-02",
    Symbol: "ETHUSD",
    Open: 293.7,
    High: 296.24,
    Low: 270.42,
    Close: 291.25,
    "Volume ETH": 218010.42,
    "Volume USD": 61564550.93
  },
  {
    Date: "2019-07-01",
    Symbol: "ETHUSD",
    Open: 290.07,
    High: 301.32,
    Low: 278.65,
    Close: 293.7,
    "Volume ETH": 184436.14,
    "Volume USD": 53230192.12
  }
];
// for (let i = 0; i < btc2019.length; i++) {
//   console.log(btc2019[i]);
// }
// forEach
btc2019.forEach(function(btc) {
  console.log(btc.Symbol, btc.Date, btc.High);
});
//
let canSell = [];
for (let i = 0; i < btc2019.length; i++) {
  if (btc2019[i] >= btc2019[i - 1]) {
    canSell.push(btc2019[i]);
  }
}
console.log(canSell);
// filter
const canBuy = btc2019.filter(function(btc) {
  if (btc.Close <= 11000) {
    return true;
  }
});
console.log(canBuy);
// map new arrays -> create array of btc volumes
const coinSymbols = ethBtc.map(function(coin) {
  return coin.Symbol;
});
console.log(coinSymbols);
//
// const coinIntervals = ethBtc.map(function(coin) {
//   return `${coin.Symbol} [O:${coin.Open}-C:${coin.Close}]`;
// });
const coinIntervals = ethBtc.map(
  coin => `${coin.Symbol} [O:${coin.Open}-C:${coin.Close}]`
);
console.log(coinIntervals);
//
const coinSquareRoot = ethBtc.map(coin => Math.sqrt(coin.Close));
const coinSquare = ethBtc.map(coin => coin.Close * 2);
console.log(coinSquareRoot, coinSquare);
// sort
// const sortedBtc = btc2019.sort(function(a, b) {
//   if (a.Close > b.Close) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
const sortedBtc = btc2019.sort((a, b) => (a.Open > b.Open ? 1 : -1));
const sortedB = btc2019.sort((a, b) => a.Open - b.Open);
console.log(sortedBtc, sortedB);
//reduce
// let closeAvg = 0, closeSum = 0;
// for (let i = 0; i < btc2019.length; i++) {
//   closeSum += btc2019[i].Close;
//   closeAvg = closeSum/btc2019.length;
// }
// reduce total
const closeSum = btc2019.reduce((total, btc) => total + btc.Close, 0);
const closeAvg = closeSum / btc2019.length;
console.log("sum: " + closeSum, "avg: " + closeAvg);
// reduce daily intervals
const closeIntTot = btc2019.reduce(
  (total, btc) => total + (btc.Close - btc.Open),
  0
); //  !!! fix absolutes logic
const closeIAvg = closeIntTot / btc2019.length;
console.log("sum: " + closeIntTot, "avg: " + closeIAvg);
// filter out negative days, calc
const avgPosOnly = btc2019
  .filter(btc => btc.Close - btc.Open >= 0)
  .map(btc => (btc.Close - btc.Open) / btc2019.length); ///calc each avg
console.log(avgPosOnly);
//
const avgPosLong = btc2019
  .filter(btc => btc.Close - btc.Open >= 0)
  .map(btc => (btc.Close - btc.Open) / btc2019.length) ///calc each avg
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0); // sum each pos avg, reduce to total
const avgPos = avgPosLong / btc2019.length;
console.log(avgPosLong, avgPos);
