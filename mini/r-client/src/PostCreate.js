import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const   [title, setTitle] = useState(""); 
  const   [post, setPost] = useState("");
  const   [did, setDid] = useState(null); 
  const   [date, setDate] = useState(null); 
  const   [author, setAuthor] = useState("anonymous"); 
  const   [cat3, setCat3] = useState("category unkown");   
  const   [blogcite, setBlogcite] = useState("citation"); 
  const   [email, setEmail ] = useState("anonymous@gmail.com");
  const   [categoryId, setCategoryId ] = useState(12);
  const   [state, setState ] = useState("published");
  
  const onSubmit = async (event) => {
    event.preventDefault(); 

    const newDate = Date.now();
      setDid("20250305");
      setDate(newDate);
      setAuthor("anonymous");
      setCat3("category unkown");
      setEmail("anonymous@gmail.com");
      setCategoryId(12);
      setState("published");


    await axios.post("http://localhost:8888/api/posts", {
      title,
      post, 
      did ,
      date ,
      author,
      cat3 ,
      blogcite,
      email,
      categoryId,
      state
    });

    setTitle("");
    setPost("");
    setBlogcite("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
          <label>Post</label>
          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="form-control" rows="3"
          />
            <label>Citation</label>
          <input
            value={blogcite}
            onChange={(e) => setBlogcite(e.target.value)}
            className="form-control"
          />

        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
