import React, { useEffect, useState } from "react";
import Cookies from "cookie-universal";
import { Axios } from "../../../Components/Helpers/Axios";
import "./Register.css";
import PhoneNumberInput from "../../../Components/PhoneNumberInput/PhoneNumberInput";
import SliderOfAuth from "../SliderOfAuth/Slider";
import Logo from "../../../Components/Logo";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import { toast } from "react-toastify";
import Notifcation from "../../../Components/Notification";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../Components/lib/firebase";
const Register = () => {
  // state
  const [inpuType, setInpuType] = useState(true);
  const [laoding, setLaoding] = useState(false);
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email_or_phone: "",
    password: "",
    password_confirmation: "",
  });

  const [validNum, setValidNum] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    if (isNaN(form.email_or_phone[0])) {
      setInpuType(false);
    } else {
      setInpuType(true);
    }
  }, [form]);
  console.log(form.email_or_phone);
  // Cookies & Token
  const cookie = Cookies();

  // handle Form Change Function
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle Form Submit Fanction
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLaoding(true);
    try {
      if ((inpuType && validNum) || !inpuType) {
        const res = await Axios.post(`auth/register`, form);
        const token = res.data.data.access_token;

        cookie.set("token", token);
        setLaoding(false);
        nav("/");
        console.log(res);
        console.log(token);

      }
    } catch (err) {
      setLaoding(false);
      setError(true);
      if (err.response.status == 422 && err) {
        toast.error(`${err.response.data.data.email_or_phone[0]}`);
        console.log(err);
      } else {
        toast.error("Internal server error");
      }
    }
  };

  return (
    <>
      <Notifcation />
      {laoding && <Loading />}
      <div className="register">
        <div className="content container">
          <div className="logo mb-4">
            <Logo />
          </div>
          <div className="texts">
            <h4>Sign up your account</h4>
            <p>Welcome back! Login With Email</p>
          </div>
          <form onSubmit={handleFormSubmit}>
            {/* <div className="phone-email"> */}
            {inpuType ? (
              <PhoneNumberInput
                form={form}
                setForm={setForm}
                setValidNum={setValidNum}
                required={true}
              />
            ) : (
              <input
                type="email"
                value={form.email_or_phone}
                placeholder="Number or email address"
                name="email_or_phone"
                onChange={handleFormChange}
                style={{ border: error && "1px solid #9e0529" }}
                required
                autoFocus
              />
            )}
            {/* </div> */}

            <input
              type="text"
              value={form.password}
              placeholder="password"
              name="password"
              onChange={handleFormChange}
              style={{ border: error && "1px solid #9e0529" }}
              required
            />
            <input
              type="text"
              value={form.password_confirmation}
              placeholder="password confirmation"
              name="password_confirmation"
              style={{ border: error && "1px solid #9e0529" }}
              onChange={handleFormChange}
              required
            />
            {form.password !== form.password_confirmation &&
              form.password_confirmation.length > 0 && (
                <div className="error">
                  <img src={require("../../../images/error.png")} alt="error" />
                  <span>password is not match !</span>
                </div>
              )}
            <div className="checkbox ">
              <input type="checkbox" id="check" required />
              <label htmlFor="check">Agree terms & policy</label>
            </div>
            <button type="submit" className="submit">
              Login
            </button>
            <div className="separetor">Or select method to log in</div>
            <div className="providers">
              <a
                href={`https://accounts.google.com/o/oauth2/auth?client_id=481862707720-fusj68itiug9jap70mkq4vala2eje5mm.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fbring-es.minaboules.com%2Fapi%2Fauth%2Fproviders%2Fgoogle%2Fcallback&scope=openid+profile+email&response_type=code`}
              >
                {" "}
                <img src={require("../../../images/google.png")} alt="" />
                <span>google</span>
              </a>
              <a href="">
                {" "}
                <img src={require("../../../images/facebook.png")} alt="" />
                <span>facebook</span>
              </a>
            </div>

            <div className="have-account">
              Do you have an account?{" "}
              <Link className="link" to="/login">
                login
              </Link>
            </div>
          </form>
        </div>
        <div className="slider">
          <SliderOfAuth />
        </div>
      </div>
    </>
  );
};

export default Register;
