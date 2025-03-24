import React, { useRef, useState } from "react";
import "./MainUserDashboardRight.css";
import OrderMenu from "./OrderMenu/OrderMenu";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Icons from "./Icons";

const MainUserDashboardRight = () => {
  const rightRef = useRef(null);
  const [show,setShow] =useState(false)
  useGSAP(() => {
    gsap.from(rightRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
    });
  });
  return (
    <div className="MainUserDashboardRight" ref={rightRef}>
    <Icons/>
      <div className="wallet">
        <h3>your wallet</h3>
        <div className="ballance">
          <div className="text">
            <p className="header">ballance</p>
            <p className="price">$500 </p>
          </div>
        </div>
      </div>
      <div className="address">
        <h3 className="title">your address</h3>
        <div className="data">
          <div>
            <img
              src={require("../../../../images/Location-colored.png")}
              alt="location"
              loading="lazy"
            />
            <span>Elm Street, 23</span>
          </div>
          <button>Change</button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.{" "}
        </p>
        <div className="adds">
          <button>add details</button>
          <button>add notes</button>
        </div>
      </div>
      <OrderMenu />
    </div>
  );
};

export default MainUserDashboardRight;
