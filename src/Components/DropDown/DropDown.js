import React, { useState } from "react";
import "./DropDown.css";
const DropDown = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`d-Down ${props.class}`} >
      <div className="toggle " onClick={() => setOpen((prev) => !prev)}>
        <p className="">{props.title}</p>
        <svg
          width="8"
          height="30"
          viewBox="0 0 8 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.330314 2.84657L3.21591 5.73217C3.65042 6.16668 4.35232 6.16668 4.78684 5.73217L7.67243 2.84657C8.37434 2.14467 7.87298 0.941406 6.8814 0.941406H1.11021C0.118629 0.941406 -0.371588 2.14467 0.330314 2.84657Z"
            fill="#9E0529"
          />
        </svg>
      </div>
      <div className={`menu ${open && "open"}`}>
        {open && (
          <>
            <button>{props.btn1}</button>
            <button>{props.btn2}</button>
          </>
        )}
      </div>
    </div>
  );
};

export default DropDown;
