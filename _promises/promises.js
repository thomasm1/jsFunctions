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
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error occured");
      }
    }, 2000);
  });
}

createPost({ title: "Promises post-three", body: "this new post3" }).then(
  getPostsPromise
);
