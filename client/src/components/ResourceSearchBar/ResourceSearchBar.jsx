import React from "react";
import CategoryButton from "../CategoryButton/CategoryButton";
import "./ResourceSearchBar.css";

const ResourceSearchBar = ({ categoryLink, categoryTitle }) => {
  return (
    <div className="row">
      <div className="card" id="resource-box">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3 align-self-center">
              <p id="category-label-1">{categoryTitle}</p>
            </div>
            <div className="col-md-5 align-self-center">
              <form className="form-inline">
                <input
                  id="search-resource"
                  className="form-control mr-sm-2 mt-2 mt-md-0"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn mt-2 mt-md-0" id="purple-search" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="col-md-4 mt-4 mt-sm-0">
              <div className="row">
              <CategoryButton
                link={categoryLink}
                title="Choose a new Category"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceSearchBar;
