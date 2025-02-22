import React from 'react';
import { Container } from 'react-bootstrap';
import City from './City';
import './CitiesWeServe.css'
import { CitiesData } from './CitiesData';
const CitiesWeServe = () => {

  const citiesShow = CitiesData.map((data) =>  <City name={data.name} image={data.image} enabled={data.enabled}/>)
  console.log(citiesShow);
  return (
    <Container className='cities-section'>
      <h3>cities we serve in egypt</h3>
      <div className="cities d-flex flex-wrap gap-4">
      {citiesShow}
      </div>
    </Container>
  );
}

export default CitiesWeServe;
