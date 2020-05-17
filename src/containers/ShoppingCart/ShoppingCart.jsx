import React from "react";
import Cart from '../../components/Cart'
import CartItem from '../../components/CartItem';
import './style.scss'
import CartFooter from "../../components/CartFooter";
import {useSelector} from "react-redux";
import sanitazeProduct from "../../modules/products/sanitazeProductData";

const ShoppingCart = ({closeShoppingCart, active}) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { Cart: { items }} = useSelector(state => state)

  const products = items.map(product => sanitazeProduct(product))

  let output;

  if (!products.length){
    output = (
      <div className="shopping-cart__content-empty">
           <span>
               Seu carrinho está vazio :(
           </span>
      </div>
    )
  }

  if(items.length) {
    output = (
      <div className="shopping-cart__content">
        <ul className="shopping-cart__content-full">
          { products.map((item,idx) => (
            <li key={idx} className="shopping-cart__content-item">
              <CartItem
                product={item}
              />
            </li>
          )) }
        </ul>
      </div>
    )
  }

  return (
    <Cart
      onClose={closeShoppingCart}
      title={`sacola(${arr.length})`}
      active={active}
    >
      { output }
    { !!(items.length && <CartFooter/>) }
    </Cart>
  )
}

export default ShoppingCart
