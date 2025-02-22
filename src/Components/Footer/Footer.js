import React from "react";
import "./Footer.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import DownloadBtn from "../DownloadBtn/DownloadBtn";
const Footer = () => {
  return (
    <div className="footer">
      <div className="content">

      <div className="list1 list">
        <Logo />
        <p>
          Allowing customers to browse menus from nearby restaurants, choose the
          meals they want, and pay for the order online
        </p>
        <div className="soical-links">
          <a href="#">
            <img
              src={require("../../images/social/Facebook.png")}
              alt="facebook"
              loading="lazy"
            />
          </a>
          <a href="#">
            <img
              src={require("../../images/social/instgram.png")}
              alt="instgram"
              loading="lazy"
            />
          </a>
          <a href="#">
            <img
              src={require("../../images/social/twiter.png")}
              alt="twiter"
              loading="lazy"
            />
          </a>
          <a href="#">
            <img
              src={require("../../images/social/behanc.png")}
              alt="behance"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="list2 list">
        <h4>Useful Links</h4>
        <div className="Links">

        <Link to="">Support</Link>
        <Link to="">Privacy Policy</Link>
        <Link to="">Terms & Conditions</Link>
        <Link to="">Affiliate Program</Link>
        <Link to="">Careers</Link>
        </div>
      </div>
      <div className="list2 list">
        <h4>Product Help</h4>
        <div className="Links">

        <Link to="">FAQs</Link>
        <Link to="">Reviews</Link>
        <Link to="">Features</Link>
        <Link to="">Feedback</Link>
        </div>
      </div>
      <div className="list2 list">
        <h4>Download</h4>
        <div className="Links order-3 flex-md-column flex-row">
      <DownloadBtn image='goolge-white.png' bg="transparent" border='1px solid #fff'/>
      <DownloadBtn image='apple.png' bg="transparent" border='1px solid #fff' apple/>
      
      </div>
      </div>
      </div>
      <img src={require('../../images/Line.png')} alt="line" width='100%' />
      <div className="copyright">

      <p>Copyright©Bringses2024. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
