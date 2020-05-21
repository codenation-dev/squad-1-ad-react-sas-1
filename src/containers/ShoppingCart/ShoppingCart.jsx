import React from "react";
import Cart from '../../components/Cart'
import CartItem from '../../components/CartItem';
import './style.scss'
import CartFooter from "../../components/CartFooter";
import {useDispatch, useSelector} from "react-redux";
import groupBY from 'lodash.groupby'
import sanitazeProduct from "../../modules/products/sanitazeProductData";
import {formatCartData} from "../../modules/products/formatCartData";
import {removeBySku, addBySku, removeAllBySku } from "../../actions/cart";

const ShoppingCart = ({closeShoppingCart, active}) => {

  const dispatch = useDispatch()

  const { Cart: { items }} = useSelector(state => state)

  const products = items.map(product => sanitazeProduct(product))

  const {
    totalCartPrice,
    cartItems
  } = formatCartData(groupBY(products,'sku'))

  let outputCartContent;
  let outputCartFooter;

  if (!products.length){
    outputCartContent = (
      <div className="shopping-cart__content-empty">
           <span>
               Seu carrinho está vazio :(
           </span>
      </div>
    )
  }

  const onAddOne = ({ sku }) => {
    dispatch(addBySku(sku))
  }

  const onRemove = ({ sku }) => {
    dispatch(removeAllBySku(sku))
  }

  const onRemoveOne = ({ sku }) => {
    dispatch(removeBySku(sku))
  }

  if(items.length) {
    outputCartContent = (
      <div className="shopping-cart__content">
        <ul className="shopping-cart__content-full">
          { cartItems.map(({product, totalItems},idx) => (
            <li key={idx} className="shopping-cart__content-item">
              <CartItem
                product={product}
                totalItems={totalItems}
                onAddOne={(product) => onAddOne(product)}
                onRemove={(product) => onRemove(product)}
                onRemoveOne={(product) => onRemoveOne(product)}
              />
            </li>
          )) }
        </ul>
      </div>
    )
  }

  if(items.length){
    outputCartFooter = <CartFooter className="shopping-cart__footer" value={totalCartPrice}/>
  }

  return (
    <Cart
      className="shopping-cart__wrapper"
      onClose={closeShoppingCart}
      title={`sacola (${cartItems.length})`}
      active={active}
    >
      { outputCartContent }
      { outputCartFooter }
    </Cart>
  )
}

export default ShoppingCart
