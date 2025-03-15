import React, { useState } from 'react';

const Form = ({ initialValues, onSubmit, children }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    // Clear the form after submission
    const newValues = {};
    Object.keys(initialValues).forEach((key) => {
      newValues[key] =  '';
    });
    setValues(newValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {typeof children === 'function' ? children({ values, handleChange }) : children} {/* Render prop or normal children */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
