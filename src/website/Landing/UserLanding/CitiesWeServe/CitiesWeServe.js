import React from 'react';
import { Container } from 'react-bootstrap';
import City from './City';
import './CitiesWeServe.css'
import { CitiesData } from './CitiesData';
const CitiesWeServe = () => {

  const citiesShow = CitiesData.map((data ,key) =>  <City name={data.name} image={data.image} enabled={data.enabled} key={key}/>)
  
  return (
    <Container className='cities-section'>
      <h3>cities we serve in egypt</h3>
      <div className="cities d-flex flex-wrap gap-4 justify-content-center">
      {citiesShow}
      </div>
    </Container>
  );
}

export default CitiesWeServe;
