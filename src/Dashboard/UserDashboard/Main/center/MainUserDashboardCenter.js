import React, { useRef } from "react";
import "./MainUserDashboardCenter.css";
import { Link } from "react-router-dom";
import CategoryCard from "../../../../Components/Dashboard/UserDashboard/Category/CategoryCard";
import ProductsContainer from "./Products-Container/ProductsContainer";
import ProductCard from "../../../../Components/Dashboard/UserDashboard/Product/ProductCard";
import GroceriesCard from "../../../../Components/Dashboard/UserDashboard/Groceries/GroceriesCard";
import RecentOrder from "../../../../Components/Dashboard/UserDashboard/RecentOrder/RecentOrder";
import Restaurant from "../../../../Components/Dashboard/UserDashboard/Restaurant/Restaurant";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const MainUserDashboardCenter = () => {
  const centerRef = useRef(null)
  const offerRef = useRef(null)
  useGSAP(()=>{
    gsap.from(centerRef.current,{
      y:30,
      opacity:0,
      duration:1
    })

    gsap.from(offerRef.current,{
      y:-30,

      duration:1,
  
    })
  })
  return (
    <div className="MainUserDashboardCenter px-2" ref={centerRef}>
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

      <div className="offer" ref={offerRef}>
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
          <div className="d-flex justify-content-evenly gap-3 ">
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
          <div className="d-flex justify-content-evenly gap-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        }
      />
      <ProductsContainer
        header="Best groceries"
        data={
          <div className="d-flex justify-content-evenly gap-3">
            <GroceriesCard />
            <GroceriesCard />
            <GroceriesCard />
          </div>
        }
      />
      <ProductsContainer
        header="Recent Order"
        data={
          <div className="d-flex justify-content-evenly gap-5">
            <RecentOrder />
            <RecentOrder />
            <RecentOrder />
          </div>
        }
      />
      <ProductsContainer
        header="Recent Order"
        data={
          <div className="d-flex justify-content-evenly gap-3">
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
