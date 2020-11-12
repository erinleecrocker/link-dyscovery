import React from "react";
import ResourceBox from "../components/ResourceBox/ResourceBox";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import ResourceResultDisplay from "../components/ResourceResultDisplay/ResourceResultDisplay";
import Navbar from '../components/Navbar/Navbar';

const ResourceCategory = () => {
  return (
    <div>
        <Navbar/>
      <ResourceBox>
        <ResourceResultDisplay>
            <div className="d-flex">
            <div class="col">
                <div class="row mb-4">
                    <CategoryButton title="All Resource" link="/verified-resources"/>
                </div>
                <div className="row">
                    <CategoryButton title="ADHD" link="/adhd"/>
                </div>
            </div>
            <div class="col">
                <div class="row mb-4">
                <CategoryButton title="Dyslexia" link="/dyslexia"/>
                </div>
                <div class="row">
                    <CategoryButton title="Dyscalculia" link="/dyscalculia"/>
                </div>
                
            </div>
            <div class="col">
                <div class="row mb-4">
                    <CategoryButton title="Dysgraphia" link="/dysgraphia"/>
                </div>
                <div class="row">
                    <CategoryButton title="Processing Deficits" link="/processing-deficits"/>
                </div>
            </div>
            </div>
        </ResourceResultDisplay>
      </ResourceBox>
    </div>
  );
};

export default ResourceCategory;
