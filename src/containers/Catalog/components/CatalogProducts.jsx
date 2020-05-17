import ProductCatalog from "../../../components/ProductCatalog";
import React from "react";
import {addCartItem, closeCart, openCart} from '../../../actions/cart'
import {toastyInfo} from "../../../modules/toasty/toastyTypes";
import sanitazeProduct from "../../../modules/products/sanitazeProductData";
import {useDispatch} from "react-redux";
import {delay} from "../../../modules/time";


const CatalogProducts = ({ items }) => {
  const dispatch = useDispatch()

  const addItemToCart = (products, selected) => {

    if(!selected) return alert('porfavor favor selecione um produto')
    const formatedProduct = {
      ...products,
      selected
    }


    dispatch(addCartItem(formatedProduct))
    fastSwitchToggleCart()
  }

  const fastSwitchToggleCart = async () => {
    dispatch(openCart())
    await delay(2000)
    dispatch(closeCart())
    return true
  }

  return (items.map((product, idx) => (
    <div key={idx} className="catalog__product-container">
      <ProductCatalog
        key={product.images}
        product={product}
      >{(productRef, selected) => {
        return <button
          onClick={() => addItemToCart(productRef, selected)}
          className="fs-button catalog__product-button">Adicionar ao carrinho</button>
      }}</ProductCatalog>
    </div>
  )))
}


CatalogProducts.defaultProps = {
  products: []
}

export default CatalogProducts
