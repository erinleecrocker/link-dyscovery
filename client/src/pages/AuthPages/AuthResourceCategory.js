import React from "react";
import ResourceBox from "../../components/ResourceBox/ResourceBox";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import ResourceResultDisplay from "../../components/ResourceResultDisplay/ResourceResultDisplay";
import NavbarUser from "../../components/Navbar/NavbarUser";

const UserResourceCategory = () => {
  return (
    <div>
       <NavbarUser />
      <ResourceBox>
        <ResourceResultDisplay>
            <div className="d-flex">
            <div class="col">
                <div class="row mb-4">
                    <CategoryButton title="All Resource" link="/verified-resources-user"/>
                </div>
                <div className="row">
                    <CategoryButton title="ADHD" link="/auth-adhd"/>
                </div>
            </div>
            <div class="col">
                <div class="row mb-4">
                <CategoryButton title="Dyslexia" link="/auth-dyslexia"/>
                </div>
                <div class="row">
                    <CategoryButton title="Dyscalculia" link="/auth-dyscalculia"/>
                </div>
                
            </div>
            <div class="col">
                <div class="row mb-4">
                    <CategoryButton title="Dysgraphia" link="/auth-dysgraphia"/>
                </div>
                <div class="row">
                    <CategoryButton title="Processing Deficits" link="/auth-processing-deficits"/>
                </div>
            </div>
            </div>
        </ResourceResultDisplay>
      </ResourceBox>
    </div>
  );
};

export default UserResourceCategory;
