import React from "react"
import './CartItem.scss';
import Product from "../../assets/img/product.jpg";

const CartItem = ({title, size, price}) => (
  <li className="minicart__content__item">
    <div className="content__item__media">
      <img src={Product} alt="foto em miniatura do produto escolhido"/>
      <button type="button" name="remover item" className="item__media__button-remove">
        Remover item
      </button>
    </div>
    <div className="content__item__description">
      <div className="content__item__description-details">
        <div className="content__item__description-title">
          <h4>Vestido xadrez curto{title}</h4>
          <p>
            Tam. 38{size}
          </p>
          <div className="content__item-quantity">
            <button>-</button>
            <input type="text"/>
            <button>+</button>
          </div>

        </div>
        <div className="content__item__description-price">
          <p>
            R${price}
          </p>
          <p>
            Até 3x de 33,33
          </p>
        </div>
      </div>

    </div>
  </li>
);

export default CartItem;
