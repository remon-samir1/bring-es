import React from "react";
import "./DownloadBtn.css";
const DownloadBtn = (props) => {
  return (
    <a
      href="#"
      className="DownloadBtn"
      style={{ border: props.border, backgroundColor: props.bg, color: props.color }}
    >
      <img
        src={require(`../../images/${props.image}`)}
        alt="download"
        loading="lazy"
      />
      <div className="content-btn">
        <span>{props.apple ?'Available on the' : 'GET IT ON'}</span>
        <p>{props.apple ? 'Apple Store' : 'Google Play'}</p>
      </div>
    </a>
  );
};

export default DownloadBtn;
