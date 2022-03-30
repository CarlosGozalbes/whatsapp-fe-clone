import React, {useState} from 'react'
import ConversationsList from './conversationlist/ConversationsList'
import HeaderContactBar from './HeaderContactBar'
import './headercontactbar.css'
import avatar123 from "../../assets/avatar.png";
import { Image } from 'react-bootstrap';
import {BsPenFill} from 'react-icons/bs'
export default function ContactsSideBar() {
  
  const [showSideBar, setShowSideBar] = useState(false);
  const [inputUserName, setInputUserName] = useState("");
  const [inputInfo, setInputInfo] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [selectedPic, setSelectedPic] = useState();
  
  const handleEditProfile = async (e) => {
    e.preventDefault();
    const MyToken = localStorage.getItem("MyToken");
    const newUserInfo = {
      username: inputUserName,
      info: inputInfo,
      avatar: avatar,
    };
    try {
      let res = await fetch(`${process.env.REACT_APP_BE_LINK}/me`, {
        //https://epichat1.herokuapp.com
        method: "PUT",
        body: JSON.stringify(newUserInfo),
        headers: { "Content-type": "application/json", Authorization: `Bearer ${MyToken}` },
      });
      if (res.status !== 200) {
        // handleOpen();
        alert("something went wrong");
        // setOpen(true);
      }
      if (res.ok) {
        
        
        //localStorage.setItem("MyToken", accessToken);
        
        alert("Successfully edit profile!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  // const [selectedImage, setSelectedImage] = useState(null)
 
  // const upload = async (e) => {
  //   e.preventDefault()
  //   const formData = new FormData()

  //   formData.append(property, selectedImage)

  //   const options = {
  //     method: "POST",
  //     // headers: {
  //     //   Authorization:
  //     //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1MzE4ODczZDVjYjAwMTUzOTVhOWYiLCJpYXQiOjE2NDI0MTAzNzYsImV4cCI6MTY0MzYxOTk3Nn0.qDjDBTYnXI7X3Y3eWLOaKSMaVRFITbDsAwrjjesIIMc",
  //     // },
  //     body: formData,
  //   }







  if (showSideBar) {
    return (
      <>
        <div className="personal-Info">
          <header className="d-flex personal-info-header">
            <span
              onClick={() => setShowSideBar(!showSideBar)}
              style={{ cursor: "pointer", fontSize: "3rem" }}
            >
              &#8592;
            </span>{" "}
            <h4> Profile </h4>
          </header>
          <div className="d-flex justify-content-center py-4">
            <Image
              roundedCircle
              src={selectedPic ? selectedPic : avatar123}
              height={250}
              className=" mx-3 my-2"
            />
          </div>
          <div>
            <form onSubmit={handleEditProfile}>
              <div className="personal-info-form-container">
                <label for="picture" className="mb-0 ">
                  <b> Profile picture</b>
                </label>
                <input
                  type="file"
                  id="picture"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                  className="inputs-personal-info"
                />

                <label for="username" className="mb-0 mt-4">
                  <b> User Name</b>
                </label>
                <div>
                  <input
                    type="text"
                    value={inputUserName}
                    onChange={(e) => setInputUserName(e.target.value)}
                    id="username"
                    className="inputs-personal-info"
                  />
                  <BsPenFill className="ml-4" />
                </div>

                <label for="picture" className="mb-0 mt-4">
                  <b>Info</b>
                </label>
                <div>
                  <input
                    type="text"
                    id="info"
                    className="inputs-personal-info"
                    value={inputInfo}
                    onChange={(e) => setInputInfo(e.target.value)}
                  />
                  <BsPenFill className="ml-4" />
                </div>
                <input
                  type="submit"
                  value="Edit profile"
                  className="submit-personal-info"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  } else {
  return (
    <div>
      
        <HeaderContactBar
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
        />
      
      <ConversationsList />
    </div>
  );}
}
