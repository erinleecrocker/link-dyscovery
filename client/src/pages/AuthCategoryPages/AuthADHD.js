import React, { useEffect, useState } from "react";
import ResourceBox from "../../components/ResourceBox/ResourceBox";
import ResourceSearchBar from "../../components/ResourceSearchBar/ResourceSearchBar";
import ResourcePageTitle from "../../components/ResourcePageTitle/ResourcePageTitle";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import ResourceResultDisplay from "../../components/ResourceResultDisplay/ResourceResultDisplay";
import NavbarUser from '../../components/Navbar/NavbarUser';
import ResourcesJSON from "../../verifiedResourceList"

// import API from "../utils/API";

const VerifiedResources = () => {
  const [allResources, setAllResources] = useState([]);

  const ADHD = allResources.filter(function (adhdResource){
      return adhdResource.category === "ADHD";
  })

  useEffect(() => {
    loadJSON();
    // loadResources();
  }, []);

const loadJSON = () => {
  setAllResources(ResourcesJSON)
}

  // const loadResources = () => {
  //   API.getResources().then((res) => {
  //     setAllResources(res.data);
  //   });
  // };

  return (
 
      <>
         <NavbarUser />
        <ResourceBox>
          <ResourcePageTitle />
          <ResourceSearchBar 
          categoryTitle="ADHD"
          categoryLink="/auth-resource-category" />
          <ResourceResultDisplay>
            {ADHD.map((resource) => {
              return <ResourceCard 
              key={resource.id}
              title={resource.title}
              url={resource.url}
              description={resource.description}
              rating={3}

              />;
              })}
          </ResourceResultDisplay>
        </ResourceBox>
      </>

  );
};

export default VerifiedResources;