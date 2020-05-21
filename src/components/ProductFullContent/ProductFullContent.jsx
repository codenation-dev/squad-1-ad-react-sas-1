import React, { useState } from "react";
import ProductInfo from "../ProductInfo";
import Sizes from "../Sizes";
import Facebook from '../../assets/img/facebook-f-brands.svg';
import Instagram from '../../assets/img/instagram-brands.svg';
import Twitter from '../../assets/img/twitter-brands.svg';
import {addCartItem, closeCart, openCart} from '../../actions/cart.js';
import {useDispatch} from "react-redux";
import {delay} from '../../modules/time';
import './style.scss';

const ProductFullContent = ({ product }) => {
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const {
    name,
    regular_price,
    discount_percentage,
    actual_price,
    sizes,
    image
  } = product

  const hasDiscount = discount_percentage.toString().includes('%')

  const toCapitalize = (text) => {
    const word = text.toLowerCase().split(" ");
    for (let a = 0; a < word.length; a++) {
      let w = word[a];
      word[a] = w[0].toUpperCase() + w.slice(1)
    }
    return word.join(" ");
  }

  const addItemToCart = (selectedProduct) => {
    dispatch(addCartItem(selectedProduct))
    fastSwitchToggleCart()
  }

  const handleClick = () => {
    if(selected) {
      addItemToCart({
        ...product,
        selected,
      })
      setSelected(null)
    } else {
      setMessage('Por favor selecione um tamanho')
    }
  }

  const handleSelected = (size) => {
    setSelected(size)
    setMessage('')
  }

  const fastSwitchToggleCart = async () => {
    dispatch(openCart())
    await delay(2000)
    dispatch(closeCart())
    return true
  }

  return (
    <div className="product-full">
      <div className="product-full__image-container">
        <img src={image} alt="white-dress"/>
      </div>
      <div className="product-full__description">
        <ProductInfo
          name={name}
          discount={hasDiscount}
          discountedPrice={actual_price}
          regularPrice={regular_price}
        />

        <p className="product-full__chose-size">Escolha o tamanho</p>

        <Sizes sizes={sizes} onSelected={size => handleSelected(size)}/>

        <button
          className="fs-button product-full__button_buy"
          onClick={() => handleClick()}
        >
        Adicionar à Sacola
        </button>

        <div className="product-catalog__validation-message">{message}</div>
        <p className="product-full__aditional-description-heading">DETALHES</p>
        <span className="product-full__aditional-description">
        {toCapitalize(name)} vai em breve se tornar favorito em seu guarda-roupas.
        A cor é incrivel, o tecido é de extrema qualidade, oferecendo conforto e luxo.
        Você vai arrasar em todos os lugares que for utilizando nossos produtos.
        Além de tudo isso, oferecemos um preço justo para que você tenha os  melhores
        produtos do mercado disponíveis a qualquer momento.
        </span>
        <img className="product-catalog__social-media" src={Facebook} alt="facebook"/>
        <img className="product-catalog__social-media" src={Instagram} alt="instagram"/>
        <img className="product-catalog__social-media" src={Twitter} alt="twitter"/>
      </div>
    </div>
  )
}

ProductFullContent.defaultProps = {
  onAddCart: () => { },
}

export default ProductFullContent
