import React from 'react';
import './CustomerDetails.css'
import { FiUser } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { VscCreditCard } from "react-icons/vsc";
const CustomerDetails = () => {
  return (
    <div className="customerDetails">
      <div className="header">

    <h4>customer Details</h4>
      </div>
    <div className="element-container">

    <div className="element">
      <FiUser className='icon'/>
      <span>Frank Morissette</span>
    </div>
    <div className="element">
      <IoLocationOutline className='icon'/>
      <span>8761 Oliver Springs, Muellermouth 08029</span>
    </div>
    <div className="element">
      <BsTelephone className='icon'/>
      <span>(565) 739-0607</span>
    </div>
    <div className="element">
      <HiOutlineMail className='icon'/>
      <span>Frank80@gmail.com</span>
    </div>
    <div className="element">
      <VscCreditCard className='icon'/>
      <span>Prepaid ( Debit card )</span>
    </div>
    </div>
  </div>
  );
}

export default CustomerDetails;
