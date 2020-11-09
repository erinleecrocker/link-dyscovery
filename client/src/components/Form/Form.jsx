import React from "react";
import "./Form.css";

export function FormGroup(props) {
    return(
  <div className="form-group row">{props.children}</div>);
}

export function FormLabel(props) {
    return(
  <label for="staticEmail" className="col-sm-2 col-form-label">
    {props.children}
  </label>);
}

export function FormControl(props) {
    return(
  <div className="col-sm-10">
    <input
      {...props}
    />
  </div>);
}
