import gsap from "gsap";
import "./HeroSection.css";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
  // Animations
  useGSAP(() => {
    gsap.from("#main-image", {
      x: 30,
      opacity: 0,
      duration: 1,
      delay:0.5
    });
    gsap.from(".herosection .content", {
      x: -30,
      opacity: 0,
      duration: 1,
      delay:0.1
    });
    gsap.from(".searchBox", {
     y:30,
     opacity:0,
      duration: 1,
      delay:0.1
    });
  });

  return (
    <div className="herosection ">
      <div className="main container">
        <div className="content col-12 col-lg-6 ">
          <h2 id="header">
            Easy Ordering, Fast Delivery, And a Service You Can Trust
          </h2>
          <p>
            Save your time and enjoy a simple and fast ordering experience. Get
            your favorite food or daily essentials without any hassle, and let
            us handle the rest.
          </p>
          <img
            src={require("../../../../images/Vector.png")}
            alt=""
            width="100px"
            loading="lazy"
            className="arrow"
          />
        </div>
        <div className="layout col-lg-5">
          <img
            src={require("../../../../images/BackgroundContainer-fotor.png")}
            alt=""
            className=""
            width="200px"
            id="main-image"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="searchBox col-6">
          <div className="d-flex gap-2">
            <img
              src={require("../../../../images/location.png")}
              alt=""
              width="30px"
              className="location"
            />
            <input
              type="text"
              placeholder="Enter delivery address"
              className="col-12"
            />
          </div>
          <button>Find Food</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
