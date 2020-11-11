import React from "react";
import CategoryButton from "../CategoryButton/CategoryButton";
import './ResourceSearchBar.css';

const ResourceSearchBar = () => {
  return (
    <div>
      <div className="row center-content">
        <div className="card" id="resource-box">
          <div className="row">
            <div className="col align-self-center">
              <p id="category-label">All Resources</p>
            </div>
            <div className="col align-self-center flex-grow-1">
              <form class="form-inline">
                <input
                  id="search-resource"
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="col align-self-center">
                <CategoryButton
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
