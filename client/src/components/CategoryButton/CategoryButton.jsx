import React from "react";
import './CategoryButton.css';

const CategoryButton = (props) => {
  return (
    
        <a href={props.link} className="btn btn-primary btn-lg ml-3" id="category-button">
          <p id="category-button-text"> {props.title}</p>
        </a>

  );
};

export default CategoryButton;
