import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileBody from "../../components/ProfileBody/ProfileBody";
import NavbarUser from "../../components/Navbar/NavbarUser";
import axios from "axios";

import API from "../../utils/API";

const Profile = () => {
  const [oneUser, setOneUser] = useState([]);

  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [userName, setUserName] = useState([]);
  const [age, setAge] = useState([]);
  const [gender, setGender] = useState([]);
  const [location, setLocation] = useState([]);
  const [bio, setBio] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const { id } = useParams();
  const loadUser = () => {
    API.getUser(id).then((res) => {
      // console.log(res)
      setOneUser(res.data);
    });
  };

  const handleEditSubmit = (e) => {
    
    e.preventDefault();
    console.log("button clicked")

    axios.put("/api/user/" + id, {userName, firstName, lastName, age, gender, location, bio}).then((res) => {
        console.log(res.data);
        setOneUser(res.data);
        loadUser();
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavbarUser />
      <ProfileBody
        key={oneUser.id}
        userName={oneUser.userName}
        emailAddress={oneUser.emailAddress}
        fullName={oneUser.fullName}
        age={oneUser.age}
        gender={oneUser.gender}
        location={oneUser.location}
        bio={oneUser.bio}
        handleFirstNameChange={(e) => {
          setFirstName(e.target.value);
        }}
        handleLastNameChange={(e) => {
          setLastName(e.target.value);
        }}
        handleUserNameChange={(e) => {
          setUserName(e.target.value);
        }}
        handleAgeChange={(e) => {
          setAge(e.target.value);
        }}
        handleGenderChange={(e) => {
          setGender(e.target.value);
        }}
        handleLocationChange={(e) => {
          setLocation(e.target.value);
        }}
        handleBioChange={(e) => {
          setBio(e.target.value);
        }}
        handleEditSubmit={handleEditSubmit}
      />
    </>
  );
};

export default Profile;
