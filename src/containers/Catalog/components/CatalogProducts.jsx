import ProductCatalog from "../../../components/ProductCatalog";
import React from "react";
import { useHistory } from "react-router-dom";
import {addCartItem, closeCart, openCart} from '../../../actions/cart'
import {toastyInfo} from "../../../modules/toasty/toastyTypes";
import sanitazeProduct from "../../../modules/products/sanitazeProductData";
import {useDispatch} from "react-redux";
import {delay} from "../../../modules/time";
import slugfy from "../../../modules/string/slugfy";
import {setPageProduct} from "../../../actions/products";


const CatalogProducts = ({ items }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const addItemToCart = (selectedProduct) => {
    dispatch(addCartItem(selectedProduct))
    fastSwitchToggleCart()
  }

  const fastSwitchToggleCart = async () => {
    dispatch(openCart())
    await delay(2000)
    dispatch(closeCart())
    return true
  }

  function handleClick(product){
    const {
      name,
      color_slug
    } = product

    dispatch(setPageProduct(product))
    history.push(`product/${slugfy(name)}?color=${color_slug}`)
  }

  return (items.map((product, idx) => (
    <div key={idx} className="catalog__product-container">
      <ProductCatalog
        key={product.images}
        onClickImage={(product) => handleClick(product)}
        product={product}
        onAddCart={(product) => addItemToCart(product)}
      />
    </div>
  )))
}


CatalogProducts.defaultProps = {
  products: []
}

export default CatalogProducts
