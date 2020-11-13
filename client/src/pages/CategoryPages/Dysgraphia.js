import React, { useEffect, useState } from "react";
import ResourceBox from "../../components/ResourceBox/ResourceBox";
import ResourceSearchBar from "../../components/ResourceSearchBar/ResourceSearchBar";
import ResourcePageTitle from "../../components/ResourcePageTitle/ResourcePageTitle";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import ResourceResultDisplay from "../../components/ResourceResultDisplay/ResourceResultDisplay";
import Navbar from '../../components/Navbar/Navbar';
import ResourcesJSON from "../../verifiedResourceList"

// import API from "../utils/API";

const VerifiedResources = () => {
  const [allResources, setAllResources] = useState([]);

  const Dysgraphia = allResources.filter(function (dysgraphiaResource){
      return dysgraphiaResource.category === "Dysgraphia";
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
      <Navbar/>
        <ResourceBox>
          <ResourcePageTitle />
          <ResourceSearchBar 
          categoryTitle="Dysgraphia"
          categoryLink="/resource-category" />
          <ResourceResultDisplay>
            Coming Soon!
            {Dysgraphia.map((resource) => {
              return <ResourceCard 
              key={resource.id}
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

export default VerifiedResources;