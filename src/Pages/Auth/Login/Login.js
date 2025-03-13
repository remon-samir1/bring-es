import React, { useEffect, useState } from "react";
import Cookies from "cookie-universal";
import { Axios } from "../../../Components/Helpers/Axios";
import "../Register/Register.css";
import PhoneNumberInput from "../../../Components/PhoneNumberInput/PhoneNumberInput";
import SliderOfAuth from "../SliderOfAuth/Slider";
import Logo from "../../../Components/Logo";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../Components/Loading/Loading";
import { toast } from "react-toastify";
import Notifcation from "../../../Components/Notification";
const Login = () => {
  // state
  const [rememberMe, setRememberMe] = useState(false);
  const [inpuType, setInpuType] = useState(true);
  const [laoding, setLaoding] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    email_or_phone: "",
    password: "",
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
  // remember me show data
  useEffect(() => {
    const savedEmail_or_phone = localStorage.getItem("email-or-phone");
    const savedPassword = localStorage.getItem("password");
    const savedRememberMe = localStorage.getItem("rememberMe");
    if (savedRememberMe === "true") {
      setForm({ email_or_phone: savedEmail_or_phone, password: savedPassword });
      setRememberMe(true);
    }
  }, []);
  // handle remember me save data
  const saveData = () => {
    if (rememberMe) {
      localStorage.setItem("email-or-phone", form.email_or_phone);
      localStorage.setItem("password", form.password);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("email-or-phone");
      localStorage.removeItem("password");
      localStorage.removeItem("rememberMe");
    }
  };
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
        saveData();
        const res = await Axios.post(`auth/login`, form);
        const token = res.data.data.access_token;
        cookie.set("token", token);
        setLaoding(false);
        window.location.pathname='/'
        console.log(res);
        console.log(token);
      }
    } catch (err) {
      setLaoding(false);
      setError(true);
      console.log(err);

      // toast.error("Internal server error");
    }
  };

  return (
    <>
      <Notifcation />
      {laoding && <Loading />}
      <div className="register">
        <div className="content container order-2">
          <div className="logo mb-3">
            <Logo />
          </div>
          <div className="texts">
            <h4>Login to your account</h4>
            <p>Welcome back! Login With Email</p>
          </div>
          <form onSubmit={handleFormSubmit}>
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
                style={{ border: error && "1px solid #9e0529" }}
                onChange={handleFormChange}
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
              required
              style={{ border: error && "1px solid #9e0529" }}
            />
            {error && (
              <div className="error">
                <img src={require("../../../images/error.png")} alt="error" />
                <span>Please check your phone or email</span>
              </div>
            )}
            <div className="checkbox ">
              <input
                type="checkbox"
                id="check"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="check">Remember Me</label>
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
              Don't have an account?{" "}
              <Link className="link" to="/register">
                create an account
              </Link>
            </div>
          </form>
        </div>
        <div className="slider order-1">
          <SliderOfAuth />
        </div>
      </div>
    </>
  );
};

export default Login;
