import React, {useState} from 'react'
import './headercontactbar.css'
import { Image } from 'react-bootstrap'
import avatar from '../../assets/avatar.png'
import { BsThreeDots, BsPlusLg, BsFullscreen, BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";







export default function HeaderContactBar({ setShowSideBar, showSideBar }) {
//   const dispatch = useDispatch();
//  const userInfo = useSelector((state) => state.userInfo);
  return (
    <>
      <header className="header-with-profile d-flex justify-content-between">
        <div className='d-flex'>
          <Image
            roundedCircle
            src={avatar}
            height={50}
            className=" mx-3 my-2"
            onClick={() => setShowSideBar(!showSideBar)}
            style={{ cursor: "pointer" }}
          /> <div className='d-flex flex-column mt-3'>
          <span>userInfo.name</span>
          <span className='userinfo-info'>Userinfo.State</span></div>
        </div>
        <div className="header-options align-self-center pb-2 mr-3">
          <BsFullscreen className="mr-4 header-icons" />
          <BsPlusLg className="mr-4 header-icons" />
          <BsThreeDots className=" mr-4 header-icons" />
        </div>
      </header>
      <div className="input-search-contact-container">
        <BsSearch className="ml-4" />
        <input
          type="text"
          placeholder="search a chat or start a new one"
          className="search-contact-input"
        />
      </div>
    </>
  );
}
