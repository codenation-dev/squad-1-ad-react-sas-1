import React from "react"
import Product from "../../assets/img/product.jpg"

import './style.scss'

const ShoppingCart = props => {
    const {itens, value, img, title, size, price} = props

    return(
        <aside className= "minicart__overlay">
            <div className= "minicart__modal" >
                <div className= "minicart__header">
                    <button className= "button-close" type= "button" name= "close cart button" >
                       X
                    </button>
                    <span>
                        sacola({itens})
                    </span>
                </div>
                <div className= "minicart__content">
                    <ul className= "mincart__content-full">
                        <li className= "minicart__content__item">
                            <div className= "content__item__media">
                                <img  src={Product} alt="foto em miniatura do produto escolhido"/>
                                <button  type="button" name="remover item" className="item__media__button-remove">
                                    Remover item
                                </button>
                            </div>
                            <div className= "content__item__description">
                                <div className= "content__item__description-details">
                                    <div className= "content__item__description-title">
                                         <h4>Vestido xadrez curto{title}</h4>
                                         <p>
                                            Tam. 38{size}
                                         </p>
                                         <div className= "content__item-quantity">
                                            <button>-</button>
                                                <input type="text"/>
                                            <button>+</button>
                                        </div>

                                    </div>
                                    <div className= "content__item__description-price">
                                        <p>
                                            R$99,99{price}
                                        </p>
                                        <p>
                                            Até 3x de 33,33
                                        </p>
                                    </div>
                                </div>
                                
                            </div>                
                        </li>
                    </ul>
                    <div className= "minicart__content-empty">
                        <span>
                            Seu carrinho está vazio :( 
                        </span>
                    </div>
                </div>
                <div className= "minicart__footer">
                    <div className= "minicart__footer__button">
                        <span className= "minicart__footer-full">
                            Subtotal R${value}
                        </span>
                        <a>
                        <span className="minicart__footer-empty">
                            Continuar comprando
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default ShoppingCart