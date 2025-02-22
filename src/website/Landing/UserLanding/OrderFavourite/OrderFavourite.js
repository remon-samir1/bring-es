import React from "react";
import "./OrderFavourite.css";
import CardForOrder from "./CardForOrder";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
const OrderFavourite = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".cardfororder2", {
      x: 30,
      opacity: 0,
      duration:1,
      

      scrollTrigger:{
        trigger:'.OrderFavourite',
        scroller:'body',
        start:'top 50%',

      }
    });
    gsap.from(".cardfororder1", {
      x: -30,
      opacity: 0,
      duration:1,
      

      scrollTrigger:{
        trigger:'.OrderFavourite',
        scroller:'body',
        start:'top 70%',

      }
    });
  });
  return (
    <div className="OrderFavourite">
      <div className="text">
        <h3>Order your favourite</h3>
        <p>
          Order what you need, and we’ll deliver it to you whether it’s food or
          groceries
        </p>
      </div>
      <div className="cards mt-5">
        <CardForOrder
          header="Hungry? we've got you covered"
          description="Browse a variety of cuisines and get your favorite meals "
          image="burger.png"
          left
          class="cardfororder1"
        />
        <CardForOrder
          header="Grocery shopping made easy"
          description="Shop for your daily essentials and household items"
          image="food.png"
          right
          class="cardfororder2"
        />
      </div>
    </div>
  );
};

export default OrderFavourite;
