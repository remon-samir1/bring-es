import React, { useState } from "react";
import Flag from "react-world-flags";
import { isValidPhoneNumber } from "libphonenumber-js";
import "./PhoneNumberInput.css";
const PhoneNumberInput = (props) => {
  const [selectedCountry, setSelectedCountry] = useState("EG");
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [data, setData] = useState();
  if (isValid) {
    props.setValidNum(true);
  } else {
    props.setValidNum(false);
  }
  const countryCodes = {
    US: "+1",
    EG: "+20",
    FR: "+33",
    DE: "+49",
    IN: "+91",
  };

  console.log(isValid);
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const number = { ...props.form, [e.target.name]: e.target.value };
    props.setForm(number);
    if (props.partner) {
      setData(number.phone_number);
    } else {
      setData(number.email_or_phone);
    }
    //
    const fullPhoneNumber = countryCodes[selectedCountry] + data;
    setIsValid(isValidPhoneNumber(fullPhoneNumber));
  };

  return (
    <>
    <div className="col-12">
      <div className="PhoneNumberInput col-12">
        <div
          className="SelectFeild"
          style={{ padding: props.partner && " 12px 10px" }}
        >
          <Flag code={selectedCountry} />
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="EG">EG</option>
            <option value="US">US</option>
            <option value="DE">DE</option>
            <option value="FR">FR</option>
            <option value="IN">IN</option>
          </select>
        </div>
        <div
          className="inputFeild"
          style={{
            border: props.partner && "0.5px solid #d6d6d6",
            padding: props.partner && "15px 20px",
          }}
        >
          <input
            type="text"
            value={props.form.phone_number || props.form.email_or_phone}
            onChange={handlePhoneNumberChange}
            placeholder="Mobile Number"
            name={props.partner ? "phone_number" : "email_or_phone"}
            required={props.required}
            autoFocus
          />
        </div>
      </div>

    </div>
      <div className="validation-num col-12">
        {isValid === null ? null : isValid ? (
          <div className="error">
          <img src={require("../../images/valid1.png")} alt="error" />
          <span className="text-success">Number is valid.</span>
        </div>
        ) : (
          <div className="error">
                  <img src={require("../../images/error.png")} alt="error" />
                  <span>Number is not valid !</span>
                </div>
        )}
      </div>
        </>
  );
};

export default PhoneNumberInput;
