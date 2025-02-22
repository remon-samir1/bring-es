import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DropDown from "../DropDown/DropDown";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Logo from "../Logo";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // gsap & asnimations
  useGSAP(() => {
    gsap.from(".navbar", {
      y: -30,
      duration: 1,
    });
  });
  useEffect(() => {
    const elements = gsap.utils.toArray(".nav-animation");
    const tl = gsap.timeline();
    elements.forEach((box, index) =>
      tl.from(
        box,
        {
          x: 20,
          opacity: 0,
          duration: 0.5,
        },
        index * 0.1
      )
    );
  }, [isOpen]);
  return (
    <>
      <div className="navbar px-4 container">
        <Link to='/' className="logo"><Logo width='150px'/></Link>

        <div className="links">
          <Link className="nav-links" to={props.path1}>
            {props.link1}
          </Link>
          <Link className="nav-links" to={props.path2}>
            {props.link2}
          </Link>
          <Link className="nav-links" to={props.path3}>
            {props.link3}
          </Link>
        </div>
        <div className="icons ">
          <div className="language">
            <select name="COUNTRY" id="">
              <option value="">EN </option>
              <option value="">AR </option>
              <option value="">DU </option>
            </select>
            <img src={require("../../images/IoGlobeOutline.png")} alt="" />
          </div>
          {props.partner ? (
            <Link to="/login" className="Button login-btn">
              Login
            </Link>
          ) : (
            <>
              <div className="icon">
                <img
                  src={require("../../images/emojione_flag-for-egypt.png")}
                  alt="Country"
                />
              </div>

              <div className="icon">
                <img src={require("../../images/user.png")} alt="User" />
              </div>
            </>
          )}
        </div>

        {isOpen && (
          <div className="res-nav">
            <div className={`res-links ${isOpen && "open"}`}>
              <Link className="nav-links nav-animation" to="/">
                Home
              </Link>
              <Link className="nav-links nav-animation" to={props.path1}>
                {props.link1}
              </Link>
              <Link className="nav-links nav-animation" to={props.path2}>
                {props.link2}
              </Link>
              <Link className="nav-links nav-animation" to={props.path3}>
                {props.link3}
              </Link>
              <DropDown class="nav-animation" title="Language" btn1="A" />
              <DropDown class="nav-animation" title="Select Country" />
              <Link to="/login" className="Button login-btn mt-5 nav-animation">
                Login
              </Link>
            </div>
          </div>
        )}
        <div className="toggle-menu" onClick={() => setIsOpen((prev) => !prev)}>
          <img
            src={require(`../../images/${
              isOpen ? "close.png" : "toggle-menu.png"
            }`)}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
