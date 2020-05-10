import React from "react";
import Badge from "../Badge";
import ProductInfo from './../ProductInfo'
import "./style.scss";

const ProductCatalog = ({ product }) => {

  const { name, image, regular_price, actual_price, percentage } = product;
  const hasDiscount = actual_price
    ? "product-catalog has-discount"
    : "product-catalog";

  return (
    <div className={hasDiscount}>
      <div className="product-catalog__image-wrapper">
        <Badge percentage={percentage} />
        <img src={image} />
      </div>
      
      <ProductInfo center product={{ name, regular_price, actual_price }}/>
    </div>
  );
}

export default ProductCatalog;
