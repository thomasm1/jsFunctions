const postsPromise = [
  {
    "Date":"2019-07-04",
    "Symbol":"BTCUSD",
    "Open":11976.42,
    "High":12064.26,
    "Low":11820,
    "Close":11909.55
 },
 {
    "Date":"2019-07-03",
    "Symbol":"BTCUSD",
    "Open":10829.18,
    "High":12014.6,
    "Low":10829.18,
    "Close":11976.42
 },
 {
    "Date":"2019-07-02",
    "Symbol":"BTCUSD",
    "Open":10577.63,
    "High":10925,
    "Low":9651,
    "Close":10829.18
 },
 {
    "Date":"2019-07-01",
    "Symbol":"BTCUSD",
    "Open":10761.26,
    "High":11210.52,
    "Low":9953,
    "Close":10577.63 
 },
 {
    "Date":"2019-06-30",
    "Symbol":"BTCUSD",
    "Open":11865.29,
    "High":12200,
    "Low":10650.06,
    "Close":10761.26 
 }
  ];
  
  function getPostsPromise() {
    setTimeout(() => {
      let outputPromise = "";
      postsPromise.forEach((postsPromise, index) => {
        outputPromise += `<li>Date: ${postsPromise.Date} Symbol:  ${postsPromise.Symbol} Close: ${postsPromise.Close}</li>`;
      });
      document.getElementById("promises").innerHTML = outputPromise;
    }, 1000);
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        postsPromise.push(post);
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
  
  createPost({ title: "Promises post-three", body: "this new post3" })
    .then(getPostsPromise)
    .catch(err => console.log(err));
  
  // Promise.all([p1,p2,p3,p4]).then(values => console.log(values)
  const promise1 = Promise.resolve("prom 1");
  const promise2 = 10;
  const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, "Goodby!")
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
        "promise All, Source:<br /> https://tmm-nov.s3.amazonaws.com/data/coins/BTCUSD_2019.json<br /><br /> Date: "+ values[3][1].Date + ' Symbol:'  + values[3][1].Symbol +  ' Close: ' + values[3][1].Close)
    //typicode (document.getElementById("promiseAll").innerHTML = values[3][7].name)
  );
  