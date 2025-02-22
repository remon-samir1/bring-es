import React from 'react';
import './GetAppDivider.css'
import { Container } from 'react-bootstrap';
import DownloadBtn from '../../../../Components/DownloadBtn/DownloadBtn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
const GetAppDivider = () => {

  return (
    <div className='GetAppDivider'>
    <div className='container'>

    <div className="phoneimage">
      <img src={require('../../../../images/mobile.png')} alt="" />
    </div>
    <div className="content">
      <div className="text">

      <h3>Get the bringses app</h3>
      <p>
      Fast, easy orders download now
      </p>
      </div>

      <div className="btns">
      <DownloadBtn image='googlePlay.png'/>
      <DownloadBtn image='apple.png' apple/>
      
      </div>
    </div>
    </div>
    </div>
  );
}

export default GetAppDivider;
