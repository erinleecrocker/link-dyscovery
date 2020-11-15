import React from "react";
import ResourceBox from "../../components/ResourceBox/ResourceBox";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import ResourceResultDisplay from "../../components/ResourceResultDisplay/ResourceResultDisplay";
import NavbarUser from "../../components/Navbar/NavbarUser";

const AuthResourceCategory = () => {
  return (
    <div>
      <NavbarUser />
      <ResourceBox>
        <ResourceResultDisplay>
          <div className="row mb-sm-4">
            <div className="col-sm-4">
              <CategoryButton title="All Resource" link="/auth-resources" />
            </div>
            <div className="col-sm-4">
              <CategoryButton title="ADHD" link="/auth-adhd" />
            </div>
            <div className="col-sm-4">
              <CategoryButton title="Dyslexia" link="/auth-dyslexia" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <CategoryButton title="Dyscalculia" link="/auth-dyscalculia" />
            </div>
            <div className="col-sm-4">
              <CategoryButton title="Dysgraphia" link="/auth-dysgraphia" />
            </div>
            <div className="col-sm-4">
              <CategoryButton
                title="Processing Deficits"
                link="/auth-processing-deficits"
              />
            </div>
          </div>
        </ResourceResultDisplay>
      </ResourceBox>
    </div>
  );
};

export default AuthResourceCategory;
