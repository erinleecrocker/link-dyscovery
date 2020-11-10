import React from "react";
import "./Form.css";

export function FormGroup(props) {
  return (
        <div id="formgroup" className="form-group row">
          {props.children}
        </div>
  );
}

export function FormLabel(props) {
  return (
    <div className="label-form col-6">
      <label htmlFor="staticEmail" className="form-label">
        {props.children}
      </label>
    </div>
  );
}

export function FormControl(props) {
  return (
    <div className="control-form col-6">
      <input className="form-control" {...props} />
    </div>
  );
}
