import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import PartnerMainSection from "./PartnerMainSection.js/PartnerMainSection";
import HowWork from "./HowWorkSection/HowWork";
import Benefits from "./Benefits/Benefits";
import AskQuestions from "./AskQuestions/AskQuestions";
import Footer from "../../../Components/Footer/Footer";

const PartnerLanding = () => {
  return (
    <div style={{ background: "#FAFAFA" }}>
      <Navbar
        link1="About"
        path1=""
        link2="FAQS"
        path2="/partner"
        link3=" Features"
        path3=""
        partner
      />
      <PartnerMainSection />
      <HowWork />
      <Benefits />
      <AskQuestions />
      <Footer />
    </div>
  );
};

export default PartnerLanding;
