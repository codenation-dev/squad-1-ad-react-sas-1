import React from "react";
import Badge from "../Badge";
import ProductInfo from './../ProductInfo'
import "./style.scss";

class ProductCatalog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, img, price, priceDiscount, percentage } = this.props.product;
    const hasDiscount = priceDiscount
      ? "product-catalog has-discount"
      : "product-catalog";

    return (
      <div className={hasDiscount}>
        <div className="product-catalog__image-wrapper">
          <Badge percentage={percentage} />
          <img src={img} />
        </div>
        
        <ProductInfo center product={{ name, price, priceDiscount }}/>
      </div>
    );
  }
}

export default ProductCatalog;
