import React, { useEffect, useState } from "react";
import ResourceBox from "../components/ResourceBox/ResourceBox";
import ResourceSearchBar from "../components/ResourceSearchBar/ResourceSearchBar";
import ResourcePageTitle from "../components/ResourcePageTitle/ResourcePageTitle";
import ResourceCard from "../components/ResourceCard/ResourceCard";
import ResourceResultDisplay from "../components/ResourceResultDisplay/ResourceResultDisplay";
import NavbarUser from "../components/Navbar/NavbarUser";

import API from "../utils/API";

const UserVerifiedResources = () => {
  const [allResources, setAllResources] = useState([]);

  useEffect(() => {
    loadResources();
  }, []);

  const loadResources = () => {
    API.getResources().then((res) => {
      setAllResources(res.data);
    });
  };

  return (
 
      <>
     <NavbarUser />
        <ResourceBox>
          <ResourcePageTitle />
          <ResourceSearchBar 
          categoryLink="/user-resource-category"/>
          <ResourceResultDisplay>
            {allResources.map((resource) => {
              return <ResourceCard 
              key={resource._id}
              title={resource.title}
              url={resource.url}
              description={resource.description}

              />;
              })}
          </ResourceResultDisplay>
        </ResourceBox>
      </>

  );
};

export default UserVerifiedResources;
