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
            <div className="col">
                <div className="row mb-4">
                    <CategoryButton title="All Resource" link="/user-resources"/>
                </div>
                <div className="row">
                    <CategoryButton title="ADHD" link="/user-adhd"/>
                </div>
            </div>
            <div className="col">
                <div className="row mb-4">
                <CategoryButton title="Dyslexia" link="/user-dyslexia"/>
                </div>
                <div className="row">
                    <CategoryButton title="Dyscalculia" link="/user-dyscalculia"/>
                </div>
                
            </div>
            <div className="col">
                <div className="row mb-4">
                    <CategoryButton title="Dysgraphia" link="/user-dysgraphia"/>
                </div>
                <div className="row">
                    <CategoryButton title="Processing Deficits" link="/user-processing-deficits"/>
                </div>
            </div>
            </div>
        </ResourceResultDisplay>
      </ResourceBox>
    </div>
  );
};

export default UserResourceCategory;