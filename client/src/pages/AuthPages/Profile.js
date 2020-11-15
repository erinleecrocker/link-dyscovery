import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
// import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import ProfileBody from "../../components/ProfileBody/ProfileBody";
import NavbarUser from "../../components/Navbar/NavbarUser";
import axios from "axios";

import API from "../../utils/API";

const Profile = () => {
  const [modalShow, setModalShow] = useState(false);
  const [oneUser, setOneUser] = useState([]);

  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [userName, setUserName] = useState([]);
  const [age, setAge] = useState([]);
  const [gender, setGender] = useState([]);
  const [location, setLocation] = useState([]);
  const [bio, setBio] = useState([]);
  // const [profileId, setProfileId] = useState([]);

  // const [fileInput, setFileInput] = useState("");
  // const [selectedFile, setSelectedFile] = useState("");
  // const [previewSource, setPreviewSource] = useState("");
  // const [imageIds, setImageIds] = useState()

  const history = useHistory();
  const { id } = useParams();

  const modalChange = () => {
    setModalShow(false)
  }

  const loadUser = () => {
    // console.log(id)
    API.getUser(id).then((res) => {
      // console.log(res)
      setOneUser(res.data);
    });
  };

  useEffect(() => {
    loadUser();
  },[]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // console.log("button clicked");
    
    axios
      .put("/api/user/" + id, {
        userName,
        firstName,
        lastName,
        age,
        gender,
        location,
        bio,
      })
      .then((res) => {
        // console.log(res.data);
        setOneUser(res.data);
        loadUser();
        modalChange();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteSubmit = (e) => {
    API.deleteUser(id).then((res) => {
      // console.log(res)
      setOneUser(res.data);
      history.push("/");
    });
  };

  // Uploading image with Cloudinary
//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     previewFile(file);
//   };

//   const previewFile = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setPreviewSource(reader.result);
//     };
//   };
  
//   const handleSubmitFile = (e) => {
//     console.log("Submit button clicked");
//     e.preventDefault();
//     if (!previewSource) return;
//     uploadImage(previewSource);
//   };
  
//   const uploadImage = async (base64EncodedImage) => {
//     // console.log(base64EncodedImage);
//     console.log(id)
//     try {
//       await fetch("/api/upload", {
//         method: "POST",
//         body: JSON.stringify({ data: base64EncodedImage, userImageId: id }),
//         headers: { "Content-type": "application/json" },
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

// const loadImages = async () => {
//   try {
//     const res = await fetch("/api/images");
//     const data = await res.json();
//     setImageIds(data);
//     // console.log(data)
//   } catch (err) {
//     console.log(err)
//   }
// }

// useEffect(() => {
//   loadImages()
// }, [])

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
        modalShow={modalShow}
        setModalShow = {setModalShow}
        handleModalHide={() => setModalShow(false)}
        handleModalShow={() => setModalShow(true)}
        handleEditSubmit={handleEditSubmit}
        handleDeleteSubmit={handleDeleteSubmit}
        // handleFileInputChange={handleFileInputChange}
        // handleSubmitFile={handleSubmitFile}
        // fileInput={fileInput}
        // selectedFile={selectedFile}
        // previewSource={previewSource}
      />
    </>
  );
};

export default Profile;
