const posts = [
  { title: "Callbacks post-one", body: "this body1" },
  { title: "Callbacks post-two", body: "this  body2" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById("callbacks").innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
//getPosts();

createPost({ title: "Callbacks post-three", body: "this new post3" }, getPosts);
