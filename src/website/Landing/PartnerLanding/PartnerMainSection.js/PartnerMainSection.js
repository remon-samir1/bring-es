import React, { useState } from "react";
import "./PartnerMainSection.css";
import PartnerLogin from "./PartnerLogin";
import Loading from "../../../../Components/Loading/Loading";
const PartnerMainSection = () => {
  const [Load, setLoad] = useState(false);

  return (
    <>
      {Load && <Loading />}
      <div className="PartnerMainSection">
        <PartnerLogin setLoad={setLoad} />

        <div className="main">
          <div className="contant">
            <h2 className="">
              Join to our Business with bringses team
            </h2>
            <p className="">
              Become a partner to reach to more customers, grow you business and
              earn more money
            </p>
            <img
              src={require("../../../../images/burger2.png")}
              alt=""
              loading="lazy"
              className="second-image "
              id="main-image"
            />

            <div className="partners-withus">
              <img
                src={require("../../../../images/framer.png")}
                alt=""
                height="50px"
              />
            </div>
          </div>
          <div className="layout ">
            <img
              src={require("../../../../images/partner-layout.png")}
              alt=""
              loading="lazy"
              className="main-image"
              id="main-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerMainSection;
