import React from "react";
import ProductInfo from "../ProductInfo";
import Sizes from "../Sizes";
import './style.scss';

const ProductFullContent = ({ product }) => {
  const {
    name,
    regular_price,
    discount_percentage,
    actual_price,
    sizes,
    image
  } = product
  const hasDiscount = discount_percentage.toString().includes('%')

  const handleSelected = (size) => {
    console.log({ size })
  }

  const toCapitalize = (text) => {
    const word = text.toLowerCase().split(" ");
    for (let a = 0; a < word.length; a++) {
      let w = word[a];
      word[a] = w[0].toUpperCase() + w.slice(1)
    }
    return word.join(" ");
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

        <button className="fs-button product-full__button_buy" type="button">Adicionar à Sacola</button>
        <p className="product-full__aditional-description-heading">DETALHES</p>
        <span className="product-full__aditional-description">
        {toCapitalize(name)} vai em breve se tornar favorito em seu guarda-roupas.
        A cor é incrivel, o tecido é de extrema qualidade, oferecendo conforto e luxo.
        Você vai arrasar em todos os lugares que for utilizando nossos produtos.
        Além de tudo isso, oferecemos um preço justo para que você tenha os  melhores
        produtos do mercado disponíveis a qualquer momento.
        </span>
      </div>
    </div>
  )
}

export default ProductFullContent
