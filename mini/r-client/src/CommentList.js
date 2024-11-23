import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const styles = {
    small: {
      color: "#48a0ff",
      fontSize: "0.8em",
    },
    li: {   
      color: "blue",
    },
    ul: {
      listStyleType: "none",
      padding: 0, 
      margin: 0,
    }
  };
  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:8888/api/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li  style={styles.li} key={comment.id}>
       {comment.body}<br />
    <small style={styles.small}>by {comment.name}</small>
    <small style={styles.small}>by {comment.email}</small>
    <hr />
    </li>;
  });

  return <ul style={styles.ul}>{renderedComments}</ul>;
};

export default CommentList;
