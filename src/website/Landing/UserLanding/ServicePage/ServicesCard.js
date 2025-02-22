import React from "react";

const ServicesCard = (props) => {
  return (
    <div className="sr-card" style={{marginLeft: props.move && '25px'}}>
      <img
        src={require(`../../../../images/${props.img}`)}
        alt="icon"
        width="70px"
      />
      <div className="text">
        <h4>{props.header}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
