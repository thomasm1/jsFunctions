const pricesPromise = [
  {
    "Date": "2019-07-04",
    "Symbol": "BTCUSD",
    "Open": 11976.42,
    "High": 12064.26,
    "Low": 11820,
    "Close": 11909.55,
    "Volume BTC": 1237.57,
    "Volume USD": 14790355.69
  },
  {
    "Date": "2019-07-03",
    "Symbol": "BTCUSD",
    "Open": 10829.18,
    "High": 12014.6,
    "Low": 10829.18,
    "Close": 11976.42,
    "Volume BTC": 36836.85,
    "Volume USD": 419076229.34
  },
  {
    "Date": "2019-07-02",
    "Symbol": "BTCUSD",
    "Open": 10577.63,
    "High": 10925,
    "Low": 9651,
    "Close": 10829.18,
    "Volume BTC": 41476.42,
    "Volume USD": 424791613.92
  },
  {
    "Date": "2019-07-01",
    "Symbol": "BTCUSD",
    "Open": 10761.26,
    "High": 11210.52,
    "Low": 9953,
    "Close": 10577.63,
    "Volume BTC": 37633.9,
    "Volume USD": 396857365.17
  },
  {
    "Date": "2019-07-04",
    "Symbol": "ETHUSD",
    "Open": 301.79,
    "High": 304,
    "Low": 300.39,
    "Close": 301.5,
    "Volume ETH": 3825.69,
    "Volume USD": 1154988.12
  },
  {
    "Date": "2019-07-03",
    "Symbol": "ETHUSD",
    "Open": 291.25,
    "High": 303.83,
    "Low": 289.61,
    "Close": 301.79,
    "Volume ETH": 105691.96,
    "Volume USD": 31264397.55
  },
  ];
  
  function getPricesPromise() {
    setTimeout(() => {
      let outputPromise = "";
      pricesPromise.forEach((pricesPromise, index) => {
        outputPromise += `<li>Date: ${pricesPromise.Date} Symbol:  ${pricesPromise.Symbol} Close: ${pricesPromise.Close}</li>`;
      });
      document.getElementById("promises").innerHTML = "Local combined Ether + Bitcoin:<br />" + outputPromise;
    }, 1000);
  }
  
  function addPrice(price) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        pricesPromise.push(price);
        //const error = true;
        const error = false;
        if (!error) {
          resolve();
        } else {
          reject("Errorrr occured");
        }
      }, 2000);
    });
  }
  
  addPrice({
    "Date":"2019-06-30",
    "Symbol":"BTCUSD",
    "Open":11865.29,
    "High":12200,
    "Low":10650.06,
    "Close":10761.26 
  })
    .then(getPricesPromise)
    .catch(err => console.log(err));
  
  // Promise.all([p1,p2,p3,p4]).then(values => console.log(values)
  const promise1 = Promise.resolve("Price 1");
  const promise2 = 10;
  const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, "Timeout-2000ms")
  );
  const promise4 = fetch(
    "https://tmm-nov.s3.amazonaws.com/data/coins/BTCUSD_2019.json"
  ).then(res => res.json());
  // const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
  
  Promise.all([promise1, promise2, promise3, promise4]).then(values =>
    console.log(values)
  );
  Promise.all([promise1, promise2, promise3, promise4]).then(
    values =>
      (document.getElementById("promiseAll").innerHTML =
        "API PromiseAll Source:<br /> https://tmm-nov.s3.amazonaws.com/data/coins/BTCUSD_2019.json<br /><br /> Date: "+ values[3][1].Date + ' Symbol:'  + values[3][1].Symbol +  ' Close: ' + values[3][1].Close)
    //typicode (document.getElementById("promiseAll").innerHTML = values[3][7].name)
  );
  