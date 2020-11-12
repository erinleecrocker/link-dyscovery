import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ProfileBody from "../components/ProfileBody/ProfileBody"
import NavbarUser from "../components/Navbar/NavbarUser";

import API from "../utils/API";

const Profile = () => {
    const [oneUser, setOneUser] = useState([]);

    useEffect(() => {
      loadUser();
    }, []);
  
    const {id} = useParams()
    const loadUser = () => {
      API.getUser(id).then((res) => {
        // console.log(res)
        setOneUser(res.data);
      });
    };

    return (
        <>
            <NavbarUser />
            <ProfileBody 
            email={oneUser.emailAddress}
            />
            
        </>
    );
};

export default Profile;