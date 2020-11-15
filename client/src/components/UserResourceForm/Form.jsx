import React, { useContext, useState } from "react";
// import PropTypes from "prop-types";
import Input from "../UserResourceInput/Input";
import DropDown from "../DropDown/DropDown";
import { useHistory } from "react-router-dom";
import AlertContext from "../../context/AlertContext";
// import ResourceBox from "../ResourceBox/ResourceBox";
import axios from "axios";
import "./Form.css";

const NewUserResource = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();
  const { setAlert } = useContext(AlertContext);

  const handleSubmit = (e, title, url, description, category ) => {
    // e.preventDefault();
    axios
      .post("/api/resource", { title, url, description, category })
      .then((response) => {
        console.log(response.data);
        setAlert({
          message: "Successfully created your resource.",
          type: "success",
        }); 
        history.push(`/user-resources`);
      })
      .catch((err) => {
        console.log(err);
        setAlert({
          message: "An error occurred creating your resource.",
          type: "danger",
        });
      });
  };

  return (
    <div className="row">
      
      <div className="card" id="resource-form-card">
        <div className="row mb-5">
        <h5 id="create-new-resource">Create a New Resource:</h5>
        </div>
      
        <form
          onSubmit={(e) => {
            handleSubmit(e, title, url, description, category);
          }}
        >
          <div className="card" id="create-new-resource-card">
          <div className="row">
          <div className="col-sm-6">
          <div className="row">
            <div className="col input-labels">
            <Input
              label="Title"
              id="title"
              name="title"
              value={title}
              handleChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            </div>
              <div className="col input-labels">
            <Input
              label="Url"
              id="url"
              name="url"
              value={url}
              handleChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            </div>
            </div>
            <div className="row">
              <div className="col input-labels">
            <Input
              label="Description"
              id="description"
              name="description"
              value={description}
              handleChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            </div>
            </div>
          </div>
          
          <div className="col-sm-6">
            <div className="row ml-5">
            <div className="form-group input-labels">
            <label id="category-label" htmlFor="category">Select the category that applies:</label>
    <DropDown 
       
        id="category"
        value={category}
        // checked={isChecked}
        handleChange={(e) => {
        setCategory(e.target.value);
        }}
      ></DropDown>
            </div>
            </div>
            </div>
            </div>
          </div>
          {/* <div className="form-group">
        <select
          className="custom-select"
          id="categories"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedcategory(e.target.value);
          }}
        >
        
          
        </select>
        <button className="btn btn-link" onClick={toggleModal} type="button">
          Don't see your category? Add it here.
        </button>
      </div> */}
          <div className="row text-center mt-3">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-primary" id="purple-button">
              Create New Resource
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// NewUserResource.propTypes = {
//   //   categories: PropTypes.array.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   //   setCategory: PropTypes.func.isRequired,
// };

export default NewUserResource;
