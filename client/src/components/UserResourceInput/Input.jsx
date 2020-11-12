import React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(
  ({ label, id, name, value, handleChange }, ref) => (
    <div className="form-group">
      <label htmlFor="pages">{label}</label>
      <input
        type="text"
        className="form-control"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        ref={ref}
      />
    </div>
  )
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;