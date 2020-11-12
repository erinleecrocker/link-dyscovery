import React, { useContext, useState } from "react";
// import PropTypes from "prop-types";
import Input from "../UserResourceInput/Input";
import DropDown from "../DropDown/DropDown";
import { useHistory } from "react-router-dom";
import AlertContext from "../../context/AlertContext";
// import ResourceBox from "../ResourceBox/ResourceBox";
import axios from "axios";

const NewUserResource = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();
  const { setAlert } = useContext(AlertContext);

  const handleSubmit = (e, title, url, description, category) => {
    e.preventDefault();
    axios
      .post("/api/resource", { title, url, description, category })
      .then((response) => {
        console.log(response.data);
        setAlert({
          message: "Successfully created your resource.",
          type: "success",
        }); 
        history.push(`/user-resources/${response.data._id}`);
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
    <form
      onSubmit={(e) => {
        handleSubmit(e, title, url, description, category);
      }}
    >
      <Input
        label="Title"
        id="title"
        name="title"
        value={title}
        handleChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Input
        label="Url"
        id="url"
        name="url"
        value={url}
        handleChange={(e) => {
          setUrl(e.target.value);
        }}
      />
        <Input
        label="Description"
        id="description"
        name="description"
        value={description}
        handleChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <div className="form-group">
      <DropDown 
       
        id="category"
        value={category}
        handleChange={(e) => {
          setCategory(e.target.value);
        }}
      ></DropDown>
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
      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Create New Resource
        </button>
      </div>
    </form>
  );
};

// NewUserResource.propTypes = {
//   //   categories: PropTypes.array.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   //   setCategory: PropTypes.func.isRequired,
// };

export default NewUserResource;
