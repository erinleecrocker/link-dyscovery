import React, { useEffect, useState } from "react";
import ResourceBox from "../../components/ResourceBox/ResourceBox";
import ResourceSearchBar from "../../components/ResourceSearchBar/ResourceSearchBar";
import ResourcePageTitle from "../../components/ResourcePageTitle/ResourcePageTitle";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import ResourceForm from "../../components/UserResourceForm/Form";
import ResourceResultDisplay from "../../components/ResourceResultDisplay/ResourceResultDisplay";
import NavbarUser from "../../components/Navbar/NavbarUser";
import API from "../../utils/API";

const UserResources = () => {
  const [allUserResources, setAllUserResources] = useState([]);

  useEffect(() => {
    loadResources();
  }, []);

  const loadResources = () => {
    API.getResources().then((res) => {
      setAllUserResources(res.data);
    });
  };
  

  return (
    <div>
      <NavbarUser />
      <ResourceBox>
        <ResourcePageTitle />
        {/* Resource Search Bar contains a search bar and a category filter button */}
        <ResourceSearchBar 
        categoryTitle="All Resources"
        categoryLink="/user-resource-category"/>
        <ResourceForm />
        <ResourceResultDisplay>
          {allUserResources.map((resource) => {
            return (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                url={resource.url}
                description={resource.description}
                rating={2.5}
              />
            );
          })}
        </ResourceResultDisplay>
      </ResourceBox>
    </div>
  );
};

export default UserResources;
