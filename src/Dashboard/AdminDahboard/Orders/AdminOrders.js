import React from "react";
import TopBar from "../TopBar/TopBar";
import InvoicesCard from "../Invoices/InvoicesCard";
import totalOrderImg from "../../../images/total-orders.svg";
import Table from "../../../Components/Dashboard/Table/Table";

const AdminOrders = () => {
  return (
    <div>
      <TopBar />
      <div className="Invoices mt-4">
        <div className="header">
          <h3>Orders</h3>
        </div>
        <div className="boxs-container">
          <InvoicesCard
            image={totalOrderImg}
            header="total orders"
            mount="+2000"
          />
          <InvoicesCard
            image={totalOrderImg}
            header="total orders"
            mount="+2000"
          />
          <InvoicesCard
            image={totalOrderImg}
            header="total orders"
            mount="+2000"
          />
          <InvoicesCard
            image={totalOrderImg}
            header="total orders"
            mount="+2000"
          />
        </div>
      </div>
      <div className="table-container mt-4">
        <h3>order list</h3>
        <Table />
      </div>
    </div>
  );
};

export default AdminOrders;
