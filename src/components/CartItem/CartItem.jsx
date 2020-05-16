import React from "react"
import './CartItem.scss';
import Product from "../../assets/img/product.jpg";

const CartItem = ({title, size, price, visibilityConfig }) => {
  const {
    removeButton: removeButtonVisibility,
    size: sizeVisibility,
    quantity: quantityVisibility,
  } = visibilityConfig

  return (
    // <li className="minicart__content__item">
      <div className="cart-item">
        <div className="cart-item__media">
          <img src={Product} alt="foto em miniatura do produto escolhido"/>
          { removeButtonVisibility && <button type="button" name="remover item" className="cart-item__button-remove">
            Remover item
          </button>}
        </div>
        <div className="cart-item__description">
          <div className="cart-item__description-details">
            <div className="cart-item__description-title">
              <h4 className="cart-item__name">Vestido xadrez curto{title}</h4>
              { sizeVisibility && <p className="cart-item__size">Tam.: {size}</p> }
            </div>
            <div className="cart-item__description-price">
              <p className="cart-item__value">
                R${price}
              </p>
              <p className="cart-item__splited-payment">
                3x de 33,33
              </p>
            </div>
          </div>
          { quantityVisibility && <div className="cart-item__quantity">
            <button className="cart-item__quantity-button"> - </button>
            <span className="cart-item__quantity-value">{0}</span>
            <button className="cart-item__quantity-button">+</button>
          </div> }
        </div>
      </div>
    // </li>
  )
}

CartItem.defaultProps = {
  title: '<no prop title>',
  size: '<no prop size>',
  price: '<no prop price>',
  visibilityConfig: {
    removeButton: true,
    size: true,
    quantity: true,
  }
}

export default CartItem;
