import React from "react";
import ResourceBox from "../components/ResourceBox/ResourceBox";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import ResourceResultDisplay from "../components/ResourceResultDisplay/ResourceResultDisplay";
import Navbar from "../components/Navbar/Navbar";

const ResourceCategory = () => {
  return (
    <div>
      <Navbar />
      <ResourceBox>
        <ResourceResultDisplay>
          <div className="row mb-sm-4">
            <div className="col-sm-4">
              <CategoryButton title="All Resource" link="/verified-resources" />
            </div>
            <div className="col-sm-4">
              <CategoryButton title="ADHD" link="/adhd" />
            </div>
            <div className="col-sm-4">
              <CategoryButton title="Dyslexia" link="/dyslexia" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <CategoryButton title="Dyscalculia" link="/dyscalculia" />
            </div>
            <div className="col-sm-4">
              <CategoryButton title="Dysgraphia" link="/dysgraphia" />
            </div>
            <div className="col-sm-4">
              <CategoryButton
                title="Processing Deficits"
                link="/processing-deficits"
              />
            </div>
          </div>
        </ResourceResultDisplay>
      </ResourceBox>
    </div>
  );
};

export default ResourceCategory;
