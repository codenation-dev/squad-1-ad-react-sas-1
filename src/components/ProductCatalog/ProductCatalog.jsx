import React, {useState} from "react";
import Badge from "../Badge";
import ProductInfo from './../ProductInfo'
import "./style.scss";

const ProductCatalog = ({product, loading, children, onClickImage}) => {

  const [selected, setSelected] = useState({ size: null, sku: null })
  const {name, image, regular_price, actual_price, discount_percentage} = product;
  const hasDiscount = discount_percentage.toString().includes('%')

  const { color_slug, code_color } = product
  const isLoading = loading ? 'is--loading' : ''
  const isSelected = (inputValue) => {
    return selected && selected.size === inputValue ? 'is--selected' : ''
  }

  const availableSizes = product.sizes.filter(({available}) => available)

  return (
    isLoading
      ? <div className='product-catalog__loading-wrapper'></div>
      : <div className={`product-catalog ${isLoading}`}>
        <div className="product-catalog__image-wrapper">
          { discount_percentage && <Badge text={discount_percentage}/> }
          <img
            onClick={(e) => onClickImage(e)}
            src={image} loading="lazy" alt="produto"/>
        </div>

        <ProductInfo
          discount={hasDiscount}
          center
          name={name}
          regularPrice={regular_price}
          discountedPrice={actual_price}/>

        <form className="product-catalog__sizes-container">
          {availableSizes.map(({size, sku}) => {
            return (
              <div key={size}>
                <input id={`${size}${code_color}`} name={`${color_slug}${code_color}`} onChange={() => setSelected({size, sku})} type="radio" />
                <label
                  htmlFor={`${size}${code_color}`}
                  className={`product-catalog__size-item ${isSelected(size)}`}>
                  {size}
                </label>
              </div>
              )
          })}
        </form>

        {children(product,selected)}
      </div>
  )
}

ProductCatalog.defaultProps = {
  product: {
    name: 'foo',
    image: "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
    regular_price: 200,
    actual_price: 100,
    discount_percentage: '',
    sizes: []
  },
  onSizeSelected: () => { alert('no fn on prop {onSizeSelected}')},
  children: () => {}
}

export default ProductCatalog;
