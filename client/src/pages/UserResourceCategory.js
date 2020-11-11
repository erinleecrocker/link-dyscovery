import React from "react";
import ResourceBox from "../components/ResourceBox/ResourceBox";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import ResourceResultDisplay from "../components/ResourceResultDisplay/ResourceResultDisplay";
import NavbarUser from "../components/Navbar/NavbarUser";

const UserResourceCategory = () => {
  return (
    <div>
       <NavbarUser />
      <ResourceBox>
        <ResourceResultDisplay>
            <div className="d-flex">
            <div class="col">
                <div class="row mb-4">
                    <CategoryButton title="All Resource" link="/verified-resources"/>
                </div>
                <div className="row">
                    <CategoryButton title="ADHD" link="/verified-resources"/>
                </div>
            </div>
            <div class="col">
                <div class="row mb-4">
                <CategoryButton title="Dyslexia" link="/verified-resources"/>
                </div>
                <div class="row">
                    <CategoryButton title="Dyscalculia" link="/verified-resources"/>
                </div>
                
            </div>
            <div class="col">
                <div class="row mb-4">
                    <CategoryButton title="Dysgraphia" link="/verified-resources"/>
                </div>
                <div class="row">
                    <CategoryButton title="Processing Deficits" link="/verified-resources"/>
                </div>
            </div>
            </div>
        </ResourceResultDisplay>
      </ResourceBox>
    </div>
  );
};

export default UserResourceCategory;
