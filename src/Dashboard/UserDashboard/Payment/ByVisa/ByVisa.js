import React from "react";
import RecentCart from "./RecentCart/RecentCart";

const ByVisa = () => {
  return (
    <div>
      <h4 className="RecentCart-Header ">
        my cards <span>(2)</span>
      </h4>
      <div className="d-flex gap-3">
        <RecentCart />
        <RecentCart />
      </div>
       






    </div>
  );
};

export default ByVisa;
