import DressImage from "../../assets/img/product.jpg";
import './style.scss';
import React from "react";
import ProductInfo from "../ProductInfo";
import Sizes from "../Sizes";

const ProductFullContent = ({ product }) => {
  const {
    name,
    regular_price,
    discount_percentage,
    actual_price,
    sizes,
    image
  } = product
  const hasDiscount = discount_percentage.toString().includes('%')

  const handleSelected = (size) => {
    console.log({ size })
  }

  return (
    <div className="product-full">
      <div className="product-full__image-container">
        <img src={image} alt="white-dress"/>
      </div>
      <div className="product-full__description">
        <ProductInfo
          name={name}
          discount={hasDiscount}
          discountedPrice={actual_price}
          regularPrice={regular_price}
        />

        <p className="product-full__chose-size">Escolha o tamanho</p>

        <Sizes sizes={sizes} onSelected={size => handleSelected(size)}/>

        <button className="fs-button product-full__button_buy" type="button">Adicionar à Sacola</button>
      </div>
    </div>
  )
}

export default ProductFullContent
