import React from "react";
import ResourceBox from "../components/ResourceBox/ResourceBox";
import ResourceSearchBar from "../components/ResourceSearchBar/ResourceSearchBar";
import ResourcePageTitle from "../components/ResourcePageTitle/ResourcePageTitle";
import ResourceCard from "../components/ResourceCard/ResourceCard";
import ResourceResultDisplay from "../components/ResourceResultDisplay/ResourceResultDisplay";
import NavbarUser from "../components/Navbar/NavbarUser";

const UserVerifiedResources = () => {
  return (
      <>
      <NavbarUser />
      <ResourceBox>
          <ResourcePageTitle />
          {/* Resource Search Bar contains a search bar and a category filter button */}
          <ResourceSearchBar 
          categoryLink="/user-resource-category"/>
          <ResourceResultDisplay>
            {/* Resource Card will take in props for Title, Web Address, Description, and Review, along with a submit review button */}
            <ResourceCard name="" url="" description="" />
          </ResourceResultDisplay>
        </ResourceBox>
      </>

  );
};

export default UserVerifiedResources;
