import React from "react";
import Badge from "../Badge";
import ProductInfo from './../ProductInfo'
import "./style.scss";

const ProductCatalog = ({product, loading}) => {

  const {name, image, regular_price, actual_price, percentage} = product;
  const hasDiscount = actual_price
    ? "product-catalog has-discount"
    : "product-catalog";

  const isLoding = loading ? 'is--loading' : ''

  return (
    isLoding
      ? <div className='product-catalog__loading-wrapper'></div>
      : <div className={`${hasDiscount} ${isLoding}`}>
        <div className="product-catalog__image-wrapper">
          { percentage !== 0 && <Badge percentage={percentage}/> }
          <img src={image}/>
        </div>

        <ProductInfo center product={{name, regular_price, actual_price}}/>
      </div>
  )
}

ProductCatalog.defaultProps = {
  product: {
    name: 'foo',
    image: "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
    regular_price: 200,
    actual_price: 100,
    percentage: 0
  }
}

export default ProductCatalog;
