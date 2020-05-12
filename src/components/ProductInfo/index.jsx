import React from 'react';
import './style.scss'
// import { Container } from './styles';

export default function ProductInfo(props) {
  const {regular_price, actual_price, center, name} = props.product
  const centerClass = center ? 'center' : ''
  let discount = 0;

  function percentage(lastValue, actualValue) {
    if (lastValue !== actualValue) {
      discount = lastValue - actualValue;
      (discount / actualValue * 100).toFixed(0);
    }
    return discount;
  }

  console.log(percentage(regular_price, actual_price));

  return (
    <div className={`product-information__description ${centerClass}`.trim()}>
      <div className="product-information__name">{name}</div>
      <div className="product-information__prices">
        <span className="product-information__price is-regular">
          {regular_price !== actual_price && regular_price}
        </span>
        <span className="product-information__price is-discount">
          {actual_price}
        </span>
      </div>
    </div>
  );
}
