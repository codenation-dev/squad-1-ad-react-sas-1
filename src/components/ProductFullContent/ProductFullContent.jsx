import DressImage from "../../assets/img/product.jpg";
import './style.scss';
import React from "react";

const ProductFullContent = () => {
  return (
    <div className="product-full">
      <div className="product-image">
        <img src={DressImage} alt="white-dress"/>
      </div>
      <div className="product-description">
        <h1 className="product-description__type">VESTIDO TRANSPASSE BOW</h1>
        <div className="price_box">
          <p className="product-description__price">R$ 199,90</p>
          <p className="product-description__payment-description">em até 3x de R$ 66,63</p>
        </div>
        <p className="product-description__size">Escolha o tamanho</p>
        <button className="button_size">P</button>
        <button className="button_size">M</button>
        <button className="button_size">G</button>

        <button className="fs-button button_buy" type="button">Adicionar à Sacola</button>
      </div>
    </div>
  )
}

export default ProductFullContent
