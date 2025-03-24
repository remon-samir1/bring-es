import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Filters.css";
import { useState } from "react";
import Slider, { Range } from "rc-slider";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import { useEffect } from "react";
import { Axios } from "../../../../Components/Helpers/Axios";
export default function Filters(props) {
  const min = 100;
  const max = 1200;
  const [price, setPrice] = useState([min, max]);
  const [CategoryData, setCategoryData] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleRender = (node, props) => {
    return (
      <Tooltip
        overlay={props.value + " EGP"}
        placement="bottom"
        trigger={["hover", "focus", "click"]}
        visible={visible}
        key={props.index}
        onVisibleChange={() => setVisible(true)}
      >
        {node}
      </Tooltip>
    );
  };
  const categoryShowData = CategoryData.slice(-6).map((data, index) => (
    <div className="radio" key={index}>
      <input
        type="radio"
        id={data.name}
        onChange={() => props.setCategories((prev) => [...prev, data.id])}
      />
      <label htmlFor={data.name}>{data.name}</label>
    </div>
  ));

  useEffect(() => {
    Axios.get("/category").then((data) => setCategoryData(data.data.data));
  }, []);
  const getCategoreisData = (e) => {
    props.setCategories(...props.categries, e.target.value);
  };
  console.log(props.categories);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {/* filter categories */}
        <div className="Category-Filters">
          <h3 className="header">filter categories</h3>
          <div className="radio-container">{categoryShowData}</div>
        </div>

        {/* Highlights */}
        <div className="Highlights-Filters">
          <h3 className="header">Highlights</h3>
          <div className="radio-container">
            <div className="radio">
              <input type="radio" id="dealsofday" name="Highlights" />
              <label htmlFor="dealsofday">Deals of the day</label>
            </div>
            <div className="radio">
              <input type="radio" id="Freeshipping" name="Highlights" />
              <label htmlFor="Freeshipping">Free shipping</label>
            </div>
            <div className="radio">
              <input type="radio" id="Bestseller" name="Highlights" />
              <label htmlFor="Bestseller">Best seller</label>
            </div>
            <div className="radio">
              <input type="radio" id="Featuredproducts" name="Highlights" />
              <label htmlFor="Featuredproducts">Featured products</label>
            </div>
          </div>
        </div>

        <div className="price-filter">
          <h3 className="header">Sort by price range</h3>
          <div className="price-inputs">
            <div className="checkbox">
              <input
                type="checkbox"
                id="price"
                value={disabled}
                onChange={() => setDisabled((prev) => !prev)}
                checked={disabled}
              />
              <label htmlFor="price">price</label>
            </div>
            <div className="range">
              <Slider
                range
                min={min}
                max={max}
                value={props.price}
                onChange={props.setPrice}
                tipFormatter={(value) => `${value}`}
                defaultValue={50}
                handleRender={handleRender}
                disabled={!disabled}
              />
            </div>
          </div>
        </div>
        <div className="search ">
          <button
            className="Button"
            onClick={() => {
              props.setFilter((prev) => !prev);
              props.onHide();
            }}
          >
            Search
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
