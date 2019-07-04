const postsPromise = [
  { title: "Promises post-one", body: "this body1" },
  { title: "Promises post-two", body: "this  body2" }
];

function getPostsPromise() {
  setTimeout(() => {
    let outputPromise = "";
    postsPromise.forEach((postsPromise, index) => {
      outputPromise += `<li>${postsPromise.title}</li>`;
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
  "https://tmm-nov.s3.amazonaws.com/data/posts/may19.json"
).then(res => res.json());
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  console.log(values)
);
Promise.all([promise1, promise2, promise3, promise4]).then(
  values =>
    (document.getElementById("promiseAll").innerHTML =
      "promise All:<br /> " + values[3][0].author)
  //typicode (document.getElementById("promiseAll").innerHTML = values[3][7].name)
);
