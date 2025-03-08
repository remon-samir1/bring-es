import React from "react";
import "./HowWork.css";
import HowWorkCard from "./HowWorkCard";
const HowWork = () => {
  return (
    <div className="HowWork">
      <div className="content">
        <h3>How does cooperation work?</h3>
        <p>
          Growing your food delivery business involves optimizing each stage of
          the customer journey
        </p>
      </div>
      <div className="cards">
        <HowWorkCard description='Lorem Ipsum Dolor Sit Amet Consectetur. Odio Cras Cras Facilisis Fermentum.' header='Customer Orders Food' image='CustomerOrdersFood.png'/>
        <HowWorkCard description="Lorem ipsum dolor sit amet consectetur. Odio cras cras facilisis fermentum." header='Preparing order' image='Preparingorder.png' />
        <HowWorkCard description="Lorem ipsum dolor sit amet consectetur. Odio cras cras facilisis fermentum." header='Our delivery' image='cuate.png' />
        <HowWorkCard description="Lorem ipsum dolor sit amet consectetur. Odio cras cras facilisis fermentum." header='Growth your business' image='Growthyourbusiness.png' />
      </div>
    </div>
  );
};

export default HowWork;
