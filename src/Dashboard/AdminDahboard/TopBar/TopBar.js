import React from "react";
import "./TopBar.css";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
const TopBar = () => {
  return (
    <div className="TopBar mt-4">
      <div className="search px-4">
        <input type="text" placeholder="Search " />
        <img
          src={require("../../../images/Search.png")}
          alt="search"
          loading="lazy"
        />
      </div>

      <div className="icons">
        <img
          src={require("../../../images/notification.png")}
          alt="icon"
          loading="lazy"
        />
      <GrLanguage className="icon"/>
      <MdOutlineDarkMode className="icon"/>
      <div className="user">
        <span>Vernon Pacocha</span>
        <div>

        <img src={require('../../../images/placeholder.png')} alt="admin" loading="lazy" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default TopBar;
