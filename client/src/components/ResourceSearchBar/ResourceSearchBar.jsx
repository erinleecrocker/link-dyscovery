import React from "react";
import CategoryButton from "../CategoryButton/CategoryButton";
import "./ResourceSearchBar.css";

const ResourceSearchBar = ({ categoryLink }) => {
  return (
    <div>
      <div className="row center-content">
        <div className="card" id="resource-box">
          <div className="row">
            <div className="col align-self-center">
              <p id="category-label">All Resources</p>
            </div>
            <div className="col align-self-center flex-grow-1">
              <form className="form-inline">
                <input
                  id="search-resource"
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="col align-self-center">
              <CategoryButton
                link={categoryLink}
                title="Choose a new Category"
              />
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ResourceSearchBar;
