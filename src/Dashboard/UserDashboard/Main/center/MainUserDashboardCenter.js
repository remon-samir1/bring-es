import React, { useEffect, useRef, useState } from "react";
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
import Location from "../../../../Components/Dashboard/UserDashboard/Location/Location";
import { Axios } from "../../../../Components/Helpers/Axios";
import SkeletonShow from "../../../../Components/Skeleton/Skeleton";
const MainUserDashboardCenter = () => {
  // state
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLaoding] = useState(false);

  // useRef
  const centerRef = useRef(null);
  const offerRef = useRef(null);
  useGSAP(() => {
    gsap.from(centerRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
    });

    gsap.from(offerRef.current, {
      y: -30,

      duration: 1,
    });
  });
  // get data
  useEffect(() => {
    setLaoding(true);
    Axios.get("/product").then((data) =>
      setProducts(data.data.data.data.slice(-3))
    );
    Axios.get("/category")
      .then((data) => setCategories(data.data.data))
      .finally(() => setLaoding(false));
  }, []);

  // Mapping
  const showProducts = products.map((data, index) => (
    <ProductCard
      key={index}
      title={data.title}
      src={data.images[0]}
      price={data.price}
    />
  ));
  //  handleAddtoCart
  const handleAddtoCart = () => {
    Axios.post("cart").then((data) => console.log(data.data));
  };
  return (
    <div className="MainUserDashboardCenter px-2" ref={centerRef}>
      <div className="header mt-4">
        <div className="text">
          <h4>Hello, Noura</h4>
          <Location />
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
        to="/PopulerProducts"
        data={
          <div className="d-flex justify-content-evenly gap-3">
            {loading ? <SkeletonShow length='3' width='250px' height='250px'/> : showProducts}
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
