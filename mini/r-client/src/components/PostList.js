
import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import { API_BASE_URL } from "../config";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get(`${API_BASE_URL}/posts`);
    setPosts(res.data.content);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="d-flex flex-row flex-wrap jusftify-content-between">
      {posts.map((post) => (
        <div
          className="card"
          style={{ width: "47%", marginBottom: "20px" }}
          key={post.id}
        >
          <div className="card-body">
            <Link to={`/posts/${post.id}`} style={{ textDecoration: "none" }}>
                <h5 style={{   color: "black" }}>{post.title}</h5>
            </Link>
            <h5>{post.post}</h5>
            <CommentList comments={post.comments || []} />{" "}
            {/* Pass comments as prop */}
            <CommentCreate postId={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CommentCreate from "./CommentCreate";
// import CommentList from "./CommentList";

// const PostList = () => {
//   const [posts, setPosts] = useState({});

//   const fetchPosts = async () => {
//     const res = await axios.get("http://localhost:8888/api/posts");

//     setPosts(res.data.content);
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const renderedPosts = Object.values(posts).map((post) => {
//     return (
//       <div
//         className="card"
//         style={{ width: "30%", marginBottom: "20px" }}
//         key={post.id}
//       >
//         <div className="card-body">
//           <h5>{post.title}</h5>
//           <h5>{post.post}</h5>
//           <CommentList postId={post.id} />
//           <CommentCreate postId={post.id} />
//         </div>
//       </div>
//     );
//   });

//   return (
//     <div className="d-flex flex-row flex-wrap justify-content-between">
//       {renderedPosts}
//     </div>
//   );
// };

// export default PostList;
