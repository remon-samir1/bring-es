import React from "react";
import "./Payment.css";
import { NavLink, Outlet } from "react-router-dom";
import { RiCashLine } from "react-icons/ri";
import { IoMdCard } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import OrderSummary from "./OrderSummary/OrderSummary";
const Payment = () => {
  return (
    <div className="Payment">
      <div className="center">
        <div className="header mt-5">
          <h3>Payment method</h3>
          <div className="links">
            <NavLink className="navlink" to="cash">
              <RiCashLine className="icon" />
              <p>Cash</p>
            </NavLink>
            <NavLink className="navlink" to="visa">
              <IoMdCard className="icon" />
              <p>By visa</p>
            </NavLink>
            <NavLink className="navlink" to="applePay">
              <FaApple className="icon" />
              <p>Apple pay</p>
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
      <OrderSummary />
    </div>
  );
};

export default Payment;
