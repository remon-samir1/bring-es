import React from "react";
import "./Invoices.css";
import InvoicesCard from "./InvoicesCard";
// image import
import totalOrderImg from "../../../images/total-orders.svg";
import FastDeliveryImg from "../../../images/FastDelivery.svg";
import BookingIcon from "../../../images/BookingIcon.svg";
import TotalIncomeImg from "../../../images/TotalIncome.svg";
import TotalRefundImg from "../../../images/TotalRefund.svg";
const Invoices = () => {
  return (
    <div className="Invoices mt-4">
      <div className="header">
        <h3>dashboard</h3>
      </div>
      <div className="boxs-container">
        <InvoicesCard
          image={totalOrderImg}
          header="total orders"
          mount="+2000"
        />
        <InvoicesCard
          image={FastDeliveryImg}
          header="total orders"
          mount="+2000"
        />
        <InvoicesCard image={BookingIcon} header="total orders" mount="+2000" />
        <InvoicesCard
          image={TotalIncomeImg}
          header="total orders"
          mount="+2000"
        />
        <InvoicesCard
          image={TotalRefundImg}
          header="total orders"
          mount="+2000"
        />
      </div>
    </div>
  );
};

export default Invoices;
