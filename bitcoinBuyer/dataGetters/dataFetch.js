  
  async function fetchAsyncEther() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //https://tmm-nov.s3.amazonaws.com/data/coins/ETHBTCUSD_2019.json
    const res = await fetch(
      "https://tmm-nov.s3.amazonaws.com/data/coins/Coinbase_ETHUSD_2019.json"
    );
    const data = await res.json();
    document.getElementById("fetchAsyncEther").innerHTML =
      "API ETHEREUM Fetched:<br /><br />https://tmm-nov.s3.amazonaws.com/data/coins/Coinbase_ETHUSD_2019.json<br /><br />Date:  " + data[5].Date + ' Symbol:  ' + data[5].Symbol + ' Close:  ' + data[5].Close;
    console.log("async fetched ..", data);
  }
  fetchAsyncEther();

  // ASYNC - AWAIT - FETCH
  async function fetchAsync() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //https://tmm-nov.s3.amazonaws.com/data/coins/ETHBTCUSD_2019.json
    const res = await fetch(
      "https://tmm-nov.s3.amazonaws.com/data/coins/BTCUSD_2019.json"
    );
    const data = await res.json();
    document.getElementById("asyncFetch").innerHTML =
      "API Fetched:<br /><br />https://tmm-nov.s3.amazonaws.com/data/coins/BTCUSD_2019.json<br /><br />Date:  " + data[0].Date + ' Symbol:  ' + data[0].Symbol + ' Close:  ' + data[0].Close;
    console.log("async fetched ..", data);
  }
  fetchAsync();


const pricesAsync = [
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
  
  function getPricesAsync() {
    setTimeout(() => {
      let outputAsync = "";
      pricesAsync.forEach((pricesAsync, index) => {
        outputAsync += `<li>Date:  ${pricesAsync.Date} Symbol:  ${pricesAsync.Symbol} Close:  ${pricesAsync.Close}</li>`;
      });
      document.getElementById("asyncAwait").innerHTML =  "Local combined Ether + Bitcoin:<br />" + outputAsync;
    }, 1000);
  }
  
  function addPrice(price) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        pricesAsync.push(price);
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
  
  // PricePrice({ title: "Promises price-three", body: "this new price3" })
  //   .then(getPricesPromise)
  //   .catch(err => console.log(err));
  
  // ASYNC - AWAIT
  async function init() {
    await addPrice({  
      "Date":"2019-06-30",
    "Symbol":"BTCUSD",
    "Open":11865.29,
    "High":12200,
    "Low":10650.06,
    "Close":10761.26  });
    getPricesAsync();
  }
  init();
  

  // // Promise.all([p1,p2,p3,p4]).then(values => console.log(values)
  // const promise1 = Promise.resolve("prom 1");
  // const promise2 = 10;
  // const promise3 = new Promise((resolve, reject) =>
  //   setTimeout(resolve, 2000, "Goodby!")
  // );
  // const promise4 = fetch(
  //   "https://tmm-nov.s3.amazonaws.com/data/posts/may19.json"
  // ).then(res => res.json());
  // // const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
  
  // Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  //   console.log(values)
  // );
  // Promise.all([promise1, promise2, promise3, promise4]).then(
  //   values =>
  //     (document.getElementById("promiseAll").innerHTML = values[3][0].author)
  //   //typicode (document.getElementById("promiseAll").innerHTML = values[3][7].name)
  // );
  