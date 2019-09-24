const postsAsync = [
  { title: "ASYNC post-one", body: "this body1" },
  { title: "ASYNC post-two", body: "this  body2" }
];

function getPostsAsync() {
  setTimeout(() => {
    let outputAsync = "";
    postsAsync.forEach((postsAsync, index) => {
      outputAsync += `<li>${postsAsync.title}</li>`;
    });
    document.getElementById("asyncAwait").innerHTML = outputAsync;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      postsAsync.push(post);
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

// createPost({ title: "Promises post-three", body: "this new post3" })
//   .then(getPostsPromise)
//   .catch(err => console.log(err));

// ASYNC - AWAIT
async function init() {
  await createPost({ title: "ASYNC post-three", body: "this new post3" });
  getPostsAsync();
}
init();

// ASYNC - AWAIT - FETCH
async function fetchAsync() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await fetch(
    "https://tmm-nov.s3.amazonaws.com/data/posts/may19.json"
  );
  const data = await res.json();
  document.getElementById("asyncFetch").innerHTML =
    "async Fetched:<br /> " + data[0].author;
  console.log("async fetched ..", data);
}
fetchAsync();
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
