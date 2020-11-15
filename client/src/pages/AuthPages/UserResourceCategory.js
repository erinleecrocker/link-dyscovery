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
          <div className="row mb-sm-4">
            <div className="col-sm-4">
              <CategoryButton title="All Resource" link="/user-resources" />
            </div>
            <div className="col-sm-4">
              <CategoryButton title="ADHD" link="/user-adhd" />
            </div>
            <div className="col-sm-4">
              <CategoryButton title="Dyslexia" link="/user-dyslexia" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <CategoryButton title="Dyscalculia" link="/user-dyscalculia" />
            </div>
            <div className="col-sm-4">
              <CategoryButton title="Dysgraphia" link="/user-dysgraphia" />
            </div>
            <div className="col-sm-4">
              <CategoryButton
                title="Processing Deficits"
                link="/user-processing-deficits"
              />
            </div>
          </div>
        </ResourceResultDisplay>
      </ResourceBox>
    </div>
  );
};

export default UserResourceCategory;
