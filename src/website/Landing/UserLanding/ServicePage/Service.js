import React from 'react';
import './Service.css'
import { Container } from 'react-bootstrap';
import ServicesCard from './ServicesCard';
const Service = () => {
  return (
    <section className='service mt-5'>
      <Container className='container'>
        <div className="content py-5">
          <h3>
          Impressions of the service
          </h3>
          <div className="cards">
            <ServicesCard
             img='Icon-bag.png'
             header='Products Quality'
             description='The food should be fresh, well-prepared, and match the description provided on the app or website.'
            />
            
            <ServicesCard
             move
             img='Icon-delivery.png'
             header='Speed of Delivery'
             description="Timely delivery, along with attention to the delivery route, makes the customer feel comfortable and appreciated."
            />
            
          </div>
        </div>
        <div className="image">
          <img src={require('../../../../images/man-food-website.png')} alt="our services" loading='lazy'/>
        </div>
      </Container>
    </section>
  );
}

export default Service;
