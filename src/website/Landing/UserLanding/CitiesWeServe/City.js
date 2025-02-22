import React from "react";
import { Link } from "react-router-dom";

const City = (props) => {
  return (
    <Link
      className="city"
      style={{ filter: !props.enabled && "grayscale(1) saturate(100%)" ,
        cursor: props.enabled ? 'cursor' : 'default'
      }}
    >
      <img
        src={require(`../../../../images/Cities/${props.image}`)}
        alt="city"
        width="240px"
        className="city-img"
      />
      <div className="content">
        <div className="text">
          <h5>{props.name}</h5>
          <p>{props.enabled ? "see more places" : "Soon"}</p>
        </div>
        <img
          src={require("../../../../images/arrow-right.png")}
          alt=">"
          width="20px"
          loading="lazy"
        />
      </div>
    </Link>
  );
};

export default City;
