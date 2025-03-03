import React, { useState } from "react";
import "./PartnerLogin.css";
import PhoneNumberInput from "../../../../Components/PhoneNumberInput/PhoneNumberInput";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Notifcation from "../../../../Components/Notification";

const PartnerLogin = (props) => {
  //  state
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    type: "",
    phone_number: "",
  });
  console.log(form.phone_number);

  const [validNum, setValidNum] = useState(false);
  console.log(validNum);
  // handle form change
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validNum) {
        props.setLoad(true);

        const res = await axios.post(
          "https://bring-es.minaboules.com/api/auth/partner",
          form
        );
        props.setLoad(false);

        // showNoftication();
        toast.success("Thank you for join to us");
        setTimeout(() => {
          window.location.pathname = "/";
        }, 1000);

        console.log(res);
      }
    } catch (err) {
      props.setLoad(false);
      console.log(err.status);

      toast.error("there is somethink wrong !");
    }
  };
  return (
    <>
      <Notifcation />

      <form className="partner-login" onSubmit={handleSubmit}>
        <h5>Login with us and get commission for 40 Days! </h5>
        <div className="names col-12">
          <div className="input-field">
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              value={form.first_name}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="input-field ">
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={form.last_name}
              onChange={handleFormChange}
              required
            />
          </div>
        </div>
        <div className="input-field col-12">
          <input
            type="email"
            placeholder="Business email "
            name="email"
            value={form.email}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="input-field col-12">
          <select
            onChange={handleFormChange}
            value={form.type}
            name="type"
            required
          >
            <option value="" selected disabled style={{ color: "gray" }}>
              Business type
            </option>
            <option value="restaurant">Restaurant</option>
            <option value="shop">Shop</option>
          </select>
        </div>

        <PhoneNumberInput
          form={form}
          setForm={setForm}
          setValidNum={setValidNum}
          required={true}
          partner={true}
        />
        {/* <DropDown /> */}
        <button type="submit" className="Button col-12 p-3 rounded">
          Get Started
        </button>
      </form>
    </>
  );
};

export default PartnerLogin;
