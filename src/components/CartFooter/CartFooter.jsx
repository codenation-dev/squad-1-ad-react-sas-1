import React from 'react'
import './style.scss'

const CartFooter = () => {
  return (
    <div className="cart-footer">
      <div className="cart-footer__container">
         <span className="cart-footer__with-currency">
             Subtotal R$ 100.00
         </span>
        <a>
           <span className="cart-footer__empty">
               Continuar comprando
           </span>
        </a>
      </div>
    </div>
  )
}

export default CartFooter
