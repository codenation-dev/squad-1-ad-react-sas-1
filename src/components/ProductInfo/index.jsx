import React from 'react';
import './style.scss'
// import { Container } from './styles';

export default function ProductInfo(props) {
  const { name, price, priceDiscount } = props.product
  const { center } = props
  const centerClass = center ? 'center' : '' 
  return (
    <div className={`product-information__description ${centerClass}`.trim()}>
      <div className="product-information__name">{name}</div>
      <div className="product-information__prices">
        <span className="product-information__price is-regular">
          {price}
        </span>
        <span className="product-information__price is-discount">
          {priceDiscount}
        </span>
      </div>
    </div>
  );
}
