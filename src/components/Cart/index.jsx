import React from "react";
import PropType from 'prop-types'
import './style.scss'

const Cart = ({ title, onClose, active, children, ...props }) => {
    const activeCart = active ? 'is--active' : '';

    return(
        <aside
            className= {`minicart__overlay ${activeCart}`.trim()}>
            <div className= "minicart__modal" >
                <div className= "minicart__header">
                    <button
                        className= "button-close"
                        type= "button"
                        name= "close cart button"
                        onClick={onClose}>
                        X
                    </button>
                    <span>
                        {title}
                    </span>
                </div>
                {children}
            </div>
        </aside>
    )
}

Cart.PropType ={
    title: PropType.string.isRequired,
    onclose: PropType.func.isRequired,
    active: PropType.bool.isRequired
}

export default Cart
