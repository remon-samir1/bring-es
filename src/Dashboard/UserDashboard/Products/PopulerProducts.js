import React, { useEffect } from "react";
import "./PopulerProducts.css";
import Logo from "../../../Components/Logo";
import { PiShoppingCartThin } from "react-icons/pi";
import Location from "../../../Components/Dashboard/UserDashboard/Location/Location";
import { Axios } from "../../../Components/Helpers/Axios";
import { Container } from "react-bootstrap";
import CategoryCard from "../../../Components/Dashboard/UserDashboard/Category/CategoryCard";
import PopulerProductCard from "./PopulerProductCard";
const PopulerProducts = () => {
  return (
    <div className="PopulerProducts">
      <div className="header">
        <div className="logo">
          <Logo width="150px" />
        </div>
        <Location />
        <div className="d-flex gap-3 align-self-start align-items-center">
          <div className="search px-4">
            <input type="text" placeholder="Search restaurant" />
            <img
              src={require("../../../images/Search.png")}
              alt="search"
              loading="lazy"
            />
          </div>
          <div className="cartShopping">
            <img
              src={require("../../../images/cartShoppingColored.png")}
              alt="shopping"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <Container>
        <div className="categories">
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        </div>
        <div className="filters ">
          <div className="filter"><img src={require('../../../images/filter.png')} alt="" /></div>
          <div className="filter"><img src={require('../../../images/sort.png')} alt="" /></div>
        </div>

      {/* will map */}
        <Container className="products">
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        <PopulerProductCard />
        </Container>
      </Container>
    </div>
  );
};

export default PopulerProducts;
