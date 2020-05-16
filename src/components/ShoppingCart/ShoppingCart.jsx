import React from "react";
import Cart from '../Cart'
import CartItem from '../CartItem';
import './style.scss'
import CartFooter from "../CartFooter";

const ShoppingCart = ({closeShoppingCart, active}) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Cart
      onClose={closeShoppingCart}
      title={`sacola(${arr.length})`}
      active={active}
    >
      <div className="shopping-cart__content">
        <ul className="shopping-cart__content-full">
          {
            arr.map((item,idx) => (
              <li className="shopping-cart__content-item">
                <CartItem
                  key={idx}
                  title="Teste"
                  price="12"
                  size="M"
                />
              </li>
            ))
          }
        </ul>
        <div className="shopping-cart__content-empty">
           <span>
               Seu carrinho está vazio :(
           </span>
        </div>
      </div>

      <CartFooter/>
    </Cart>
  )
}

export default ShoppingCart
