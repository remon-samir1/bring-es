import React from 'react';
import './Location.css'
const Location = () => {
  return (
    <div className='Location'>
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
  );
}

export default Location;
