import React from "react";
import Badge from "../Badge";
import ProductInfo from './../ProductInfo'
import "./style.scss";

const ProductCatalog = ({product, loading}) => {

  const {name, image, regular_price, actual_price, discount_percentage} = product;
  const hasDiscount = discount_percentage.toString().includes('%')
    ? "product-catalog has-discount"
    : "product-catalog";

  console.log({ image })
  const isLoding = loading ? 'is--loading' : ''

  return (
    isLoding
      ? <div className='product-catalog__loading-wrapper'></div>
      : <div className={`${hasDiscount} ${isLoding}`}>
        <div className="product-catalog__image-wrapper">
          { discount_percentage && <Badge text={discount_percentage}/> }
          <img src={image} alt="produto"/>
        </div>
      
        <ProductInfo
          center
          name={name}
          regularPrice={regular_price}
          discountedPrice={actual_price}/>
      </div>
  )
}

ProductCatalog.defaultProps = {
  product: {
    name: 'foo',
    image: "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
    regular_price: 200,
    actual_price: 100,
    discount_percentage: ''
  }
}

export default ProductCatalog;
