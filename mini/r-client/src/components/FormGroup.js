import React from 'react';

const FormGroup = ({ label, id, type = "text", values, handleChange, children, ...props }) => {
    return(
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            {
              type === "select" ? (
                <select
                  id={id}
                  name={id}
                  value={values[id] || ""}
                  onChange={handleChange}
                  className="form-control"
                  {...props}
                >
                  {children}
                </select>
              ) : type === 'textarea' ? <textarea 
                id={id} 
                name={id} 
                value={values[id] || ''}
                onChange={handleChange}
                className="form-control" rows="3"
                {...props}
                /> : <input
                    type={type}
                    id={id}
                    name={id}
                    value={values[id] || ''}
                    onChange={handleChange}
                    className="form-control"
                    {...props}
                />
            }
        </div>
    );
}

export default FormGroup;
