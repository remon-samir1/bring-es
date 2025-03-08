import React, { useState } from "react";
import RecentCart from "./RecentCart/RecentCart";
import './ByVisa.css'
const ByVisa = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
     // handle CardNumber input
  const formatCardNumber = (value) => {
    let cleanedValue = value.replace(/\D/g, "").slice(0, 16);

    let formattedValue = cleanedValue.replace(/(\d{4})/g, "$1 ").trim();

    setCardNumber(formattedValue);
  };
      // handle Cvc input
  const formatCvc = (value)=> {
    let cleanedValue = value.replace(/\D/g, "").slice(0, 3);
  setCvc(cleanedValue)
  }
  return (
    <div className="ByVisa">
      <h4 className="RecentCart-Header ">
        my cards <span>(2)</span>
      </h4>
      <div className="d-flex gap-3">
        <RecentCart />
        <RecentCart />
      </div>
      <div className="addCart">
        <h4 className="header">Add new card</h4>
        <form>
          <div className="input-container">
            <label htmlFor="name">Card holder name</label>
            <input type="text" name="name" id="name" placeholder="Card name" />
          </div>
          <div className="input-container card-number">
            <label htmlFor="cardNumber">Card number</label>

            <input
              type="text"
              value={cardNumber}
              onChange={(e) => formatCardNumber(e.target.value)}
              placeholder="Card number"
              maxLength="19"
              inputMode="numeric"
              id="cardNumber"
            />
          </div>
          <div className="details">
            <div className="input-container">
              <label htmlFor="date">Expiry date</label>
              <input type="month" name="date" id="date" placeholder="month" />
            </div>
            <div className="input-container cvc">
              <label htmlFor="number">Security code</label>

              <input
                inputMode="numeric"
                value={cvc}
                type="text"
                name="number"
                placeholder="CVC"
                id="number"
                maxLength="3"
                onChange={(e) => formatCvc(e.target.value)}
              />
            </div>
          </div>
        </form>

        <div className="checkbox ">
              <input type="checkbox" id="check" required />
              <label htmlFor="check">Use same address as shipping</label>
            </div>

     <button className="Button">
     Save & Confirm
     </button>

      </div>
    </div>
  );
};

export default ByVisa;
