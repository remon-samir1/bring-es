import React from "react";
import "./MainUserDashboardCenter.css";
import { Link } from "react-router-dom";
import CategoryCard from "../../../../Components/Dashboard/UserDashboard/Category/CategoryCard";
import ProductsContainer from "./Products-Container/ProductsContainer";
import ProductCard from "../../../../Components/Dashboard/UserDashboard/Product/ProductCard";
import GroceriesCard from "../../../../Components/Dashboard/UserDashboard/Groceries/GroceriesCard";
import RecentOrder from "../../../../Components/Dashboard/UserDashboard/RecentOrder/RecentOrder";
import Restaurant from "../../../../Components/Dashboard/UserDashboard/Restaurant/Restaurant";
const MainUserDashboardCenter = () => {
  return (
    <div className="MainUserDashboardCenter px-2">
      <div className="header mt-4">
        <div className="text">
          <h4>Hello, Noura</h4>
          <p>your current Location</p>
          <div className="location">
            <img
              src={require("../../../../images/Location-colored.png")}
              alt="Location"
              loading="lazy"
            />
            <p>Elm Street, 23</p>
          </div>
        </div>
        <div className="searchbox">
          <input type="text" placeholder="What do you want to eat today?" />
          <img
            src={require("../../../../images/Search.png")}
            alt="search"
            loading="lazy"
          />
        </div>
      </div>

      <div className="offer">
        <div className="text">
          <h4>Get Discount Voucher Up To 20% </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.{" "}
          </p>
        </div>
        <div className="img">
          <img
            src={require("../../../../images/offer-img.png")}
            alt="offer"
            loading="lazy"
          />
        </div>
      </div>

      <ProductsContainer
        header="Category"
        data={
          <div className="d-flex justify-content-between">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        }
      />
      <ProductsContainer
        header="Populer Foods"
        data={
          <div className="d-flex justify-content-between">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        }
      />
      <ProductsContainer
        header="Best groceries"
        data={
          <div className="d-flex justify-content-between">
            <GroceriesCard />
            <GroceriesCard />
            <GroceriesCard />
          </div>
        }
      />
      <ProductsContainer
        header="Recent Order"
        data={
          <div className="d-flex justify-content-between">
            <RecentOrder />
            <RecentOrder />
            <RecentOrder />
          </div>
        }
      />
      <ProductsContainer
        header="Recent Order"
        data={
          <div className="d-flex justify-content-between">
            <Restaurant />
            <Restaurant />
            <Restaurant />
          </div>
        }
      />
    </div>
  );
};

export default MainUserDashboardCenter;
