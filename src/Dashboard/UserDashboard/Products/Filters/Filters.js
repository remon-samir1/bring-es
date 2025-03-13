import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Filters.css";
// import ReactSlider from "react-slider";
import { useState } from "react";
export default function Filters(props) {
  const min = 100;
  const max = 1200;
  const [price , setPrice] = useState([min , max]);
  const [disabled , setDisabled] = useState(false)

  console.log(price);
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
              <input type="radio" id="fried" name="categories" />
              <label htmlFor="fried">Fried food</label>
            </div>
            <div className="radio">
              <input type="radio" id="seafood" name="categories" />
              <label htmlFor="seafood">seafood</label>
            </div>
            <div className="radio">
              <input type="radio" id="fruits" name="categories" />
              <label htmlFor="fruits">fruits</label>
            </div>
            <div className="radio">
              <input type="radio" id="vegetables" name="categories" />
              <label htmlFor="vegetables">vegetables</label>
            </div>
            <div className="radio">
              <input type="radio" id="breads" name="categories" />
              <label htmlFor="breads">breads</label>
            </div>
            <div className="radio">
              <input type="radio" id="juices" name="categories" />
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
          <input type="checkbox" id="price" value={disabled} onChange={()=> setDisabled(prev=> !prev)} checked={disabled} />
          <label htmlFor="price">price</label>
         </div>
          <div className="range">
            {/* <ReactSlider
            min={min}
            max={max}
            value={price}
            onChange={setPrice}
              className={`slider ${!disabled && 'disabled'}`}
              thumbClassName="thumb" 
              trackClassName={`track ${!disabled && 'disabled'}`}
              ariaLabel={["Lower thumb", "Upper thumb"]}
              ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
              renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
                )}
                pearling
                minDistance={10}
                disabled={!disabled}
                /> */}
                </div>
          </div>
        </div>
        <div className="search ">

        <button className="Button" onClick={props.onHide}>Search</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
