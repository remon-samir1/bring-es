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
          <div className="contant  ">
            <h2 className="px-2 px-md-4">
              Join to our Business with bringses team
            </h2>
            <p className="px-2 px-md-4">
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

            <div className="partners-withus px-0 px-md-4">
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
