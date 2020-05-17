import React from 'react'
import './style.scss'
import {floatToCurrency} from "../../modules/number/formaters";

const CartFooter = ({ value }) => {
  return (
    <div className="cart-footer">
      <div className="cart-footer__container">
         <span className="cart-footer__with-currency">
             Subtotal {floatToCurrency(value)}
         </span>
        <a href="/#">
           <span className="cart-footer__empty">
               Continuar comprando
           </span>
        </a>
      </div>
    </div>
  )
}

CartFooter.defaultProps ={
  value: 0
}

export default CartFooter
