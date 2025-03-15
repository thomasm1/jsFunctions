import React from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import Form from "./Form";
import FormGroup from "./FormGroup";

const CommentCreate = ({ postId }) => {
  const handleSubmit = async (values) => {
    try {
        await axios.post(`${API_BASE_URL}/posts/${postId}/comments`, {
          ...values,
          name: "Commenter",
          email: "anonymous@gmail.com",
        });
      } catch (error) {
        console.error("Error creating comment:", error);
        alert("Error creating comment. Please check the console for details.");
      }
  };

  return (
    <div>
      <Form
        initialValues={{
          body: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => ( // <--- Render prop function
            <FormGroup label="New Comment" id="body" values={values} handleChange={handleChange} />
        )}
      </Form>
    </div>
  );
};

export default CommentCreate;
