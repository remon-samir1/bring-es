import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Filters.css";
import { useState } from "react";
import Slider, { Range } from "rc-slider";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
export default function Filters(props) {
  const min = 100;
  const max = 1200;
  const [price, setPrice] = useState([min, max]);
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
  console.log(props.price[1]);
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
          <div className="radio-container">
            <div className="radio">
              <input
                type="radio"
                id="fried"
                onChange={() =>
                  props.setCategories((prev) => [...prev, "fried"])
                }
              />
              <label htmlFor="fried">Fried food</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="seafood"
                onChange={() =>
                  props.setCategories((prev) => [...prev, "seafood"])
                }
              />
              <label htmlFor="seafood">seafood</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="fruits"
                onChange={() =>
                  props.setCategories((prev) => [...prev, "fruits"])
                }
              />
              <label htmlFor="fruits">fruits</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="vegetables"
                onChange={() =>
                  props.setCategories((prev) => [...prev, "vegetables"])
                }
              />
              <label htmlFor="vegetables">vegetables</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="breads"
                onChange={() =>
                  props.setCategories((prev) => [...prev, "breads"])
                }
              />
              <label htmlFor="breads">breads</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="juices"
                onChange={() =>
                  props.setCategories((prev) => [...prev, "juices"])
                }
              />
              <label htmlFor="juices">juices</label>
            </div>
          </div>
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
