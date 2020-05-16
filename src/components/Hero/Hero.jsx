import React from 'react';
import HeroImage from './../../assets/img/background-01.jpg'

import './style.scss';

const Hero = () => {
  return (
  <React.Fragment>
    <div className="hero">
      <div className="hero__image-wrapper">
        {/*<img src={HeroImage} alt=""/>*/}
      </div>
    </div>
    <div className="catalog_header">OFERTAS</div>
  </React.Fragment>
  )
};

export default Hero;
