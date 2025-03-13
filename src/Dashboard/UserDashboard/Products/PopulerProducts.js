import React, { useEffect, useRef, useState } from "react";
import "./PopulerProducts.css";
import Logo from "../../../Components/Logo";
import Location from "../../../Components/Dashboard/UserDashboard/Location/Location";
import { Axios } from "../../../Components/Helpers/Axios";
import { Container } from "react-bootstrap";
import CategoryCard from "../../../Components/Dashboard/UserDashboard/Category/CategoryCard";
import PopulerProductCard from "./PopulerProductCard";
import Filters from "./Filters/Filters";
import Cart from "../Cart/Cart";
import Pagination from "../../../Components/Pagination/Pagination";
import SkeletonShow from "../../../Components/Skeleton/Skeleton";
const PopulerProducts = () => {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const viewRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [skeleton, setSkeleton] = useState(false);
  console.log(page);
  // get data
  useEffect(() => {
    setSkeleton(true);
    const res = Axios.get(`./product?page=${page}`)
      .then(
        (data) => (
          setProducts(data.data.data.data), setTotal(data.data.data.total)
        )
      )
      .finally(() => setSkeleton(false));
    viewRef.current.scrollIntoView({ behavior: "smooth" });
  }, [page]);
  console.log(products);

  // Mapping
  const showProducts = products.map((data, index) => (
    <PopulerProductCard
      key={index}
      title={data.title}
      src={data.images[0]}
      category={data.category.name}
    />
  ));

  return (
    <div className="PopulerProducts">
      <div ref={viewRef} />
      {/* cart */}
      <Cart handleShow={handleShow} show={show} handleClose={handleClose} />

      {/*  filters */}
      <Filters show={modalShow} onHide={() => setModalShow(false)} />

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
          <div className="cartShopping" onClick={handleShow}>
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
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
        <div className="filters ">
          <div className="filter" onClick={() => setModalShow(true)}>
            <img src={require("../../../images/filter.png")} alt="" />
          </div>
          <div className="filter">
            <img src={require("../../../images/sort.png")} alt="" />
          </div>
        </div>

        {/* will map */}
        <Container className="products">
          {skeleton ? (
            <SkeletonShow length="15" width="350px" height="200px" />
          ) : (
            showProducts
          )}
        </Container>
      </Container>
      <Container className="text-center mt-3">
        <Pagination itemsPerPage={15} setPage={setPage} total={total} />
      </Container>
    </div>
  );
};

export default PopulerProducts;
