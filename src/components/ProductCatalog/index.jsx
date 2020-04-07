import React from 'react';
import './style.scss';

class ProductCatalog extends React.Component {
    constructor(props) {
        super(props)
    }
   
    render() {
        const { name, img, porcentage, price, priceDiscount } = this.props.product;
        const hasDiscount = priceDiscount ? "product-catalog has-discount":"product-catalog"

        return(
        <div className={hasDiscount}>
            <div className="product-catalog__image-wrapper">
                <img src={img}/>
                <div className="product-catalog__badge">
                    {porcentage}%
                </div>
            </div>
            <div className="product-catalog__description">
                <div className="product-catalog__product-name">{name}</div>
                <div className="product-catalog__product-prices">
                    <span className="product-catalog__product-price is-regular">{price}</span>
                    <span className="product-catalog__product-price is-discount">{priceDiscount}</span>
                </div>
            </div>
        </div>
        )
    };
};

export default ProductCatalog;