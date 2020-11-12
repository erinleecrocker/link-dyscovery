import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileBody from "../../components/ProfileBody/ProfileBody"
import NavbarUser from "../../components/Navbar/NavbarUser";

import API from "../../utils/API";

const Profile = () => {
  const [oneUser, setOneUser] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");


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
  API.editUser(id, {firstName, lastName, userName, age, gender, location, bio}).then((res) => {
    console.log(res.data)
    setOneUser(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

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
        learningDisabilities={oneUser.learningDisabilities}
      />
    </>
  );
};

export default Profile;
