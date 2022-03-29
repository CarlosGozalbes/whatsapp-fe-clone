import React from 'react'
import './headercontactbar.css'
import { Image } from 'react-bootstrap'
import avatar from '../../assets/avatar.png'
import { BsThreeDots, BsPlusLg, BsFullscreen, BsSearch } from "react-icons/bs";
export default function HeaderContactBar() {
  return (
    <>
      <header className="header-with-profile d-flex justify-content-between">
        <div>
          <Image
            roundedCircle
            src={avatar}
            height={50}
            className=" mx-3 my-2"
          />
          <span>My Name</span>
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
