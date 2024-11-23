import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [body, setBody] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:8888/api/posts/${postId}/comments`, {
      body,
      name: "Commenter",
      email: "anonymous@gmail.com" 
    });

    setBody("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
