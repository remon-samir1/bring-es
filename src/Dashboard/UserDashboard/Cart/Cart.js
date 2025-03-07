import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./Cart.css";
import CartProduct from "./CartProduct";
const Cart = (props) => {
  return (
    <div className="Cart">
      <Offcanvas show={props.show} onHide={props.handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            My Cart <span>(3items)</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="delivery">
            <div>
              <h5>Deliver to</h5>
              <div className="location">
                <img
                  src={require("../../../images/Location-colored.png")}
                  alt="location"
                  loading="lazy"
                />{" "}
                <span>Elm Street, 23</span>
              </div>
            </div>
            <img src={require('../../../images/arrow-right.png')} alt="arrow" className="arrow" loading="lazy"/>
          </div>

          <div className="CartProductsContainer mt-3">
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
          </div>
          <div className="addaItems">
            <img src={require('../../../images/black-plus.png')} alt="+" loading="lazy"/>
            <p>Add more items</p>
          </div>
          <div className="services">
          <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.6663 11.6673C31.6663 9.83398 30.1663 8.33398 28.333 8.33398H23.333V11.6673H28.333V16.084L22.533 23.334H16.6663V15.0007H9.99967C6.31634 15.0007 3.33301 17.984 3.33301 21.6673V26.6673H6.66634C6.66634 29.434 8.89967 31.6673 11.6663 31.6673C14.433 31.6673 16.6663 29.434 16.6663 26.6673H24.133L31.6663 17.2507V11.6673ZM6.66634 23.334V21.6673C6.66634 19.834 8.16634 18.334 9.99967 18.334H13.333V23.334H6.66634ZM11.6663 28.334C10.7497 28.334 9.99967 27.584 9.99967 26.6673H13.333C13.333 27.584 12.583 28.334 11.6663 28.334Z"
                fill="#858585"
              />
              <path
                d="M8.33301 10H16.6663V13.3333H8.33301V10ZM31.6663 21.6667C28.8997 21.6667 26.6663 23.9 26.6663 26.6667C26.6663 29.4333 28.8997 31.6667 31.6663 31.6667C34.433 31.6667 36.6663 29.4333 36.6663 26.6667C36.6663 23.9 34.433 21.6667 31.6663 21.6667ZM31.6663 28.3333C30.7497 28.3333 29.9997 27.5833 29.9997 26.6667C29.9997 25.75 30.7497 25 31.6663 25C32.583 25 33.333 25.75 33.333 26.6667C33.333 27.5833 32.583 28.3333 31.6663 28.3333Z"
                fill="#858585"
              />
            </svg>
            <div className="texts">
          <h5 className="name"> Services</h5>
          <p className="price"><span>$</span> 5.54</p>
        </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;
