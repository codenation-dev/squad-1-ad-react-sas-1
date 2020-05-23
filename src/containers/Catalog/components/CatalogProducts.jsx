import ProductCatalog from "../../../components/ProductCatalog";
import React from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setPageProduct} from "../../../actions/products";
import {goToProduct} from "../../../hooks/store/use-cart-store";


const CatalogProducts = ({ items }) => {
  const [,setGoToProd] = goToProduct({
    dispatch: useDispatch(),
    setPageProduct: setPageProduct,
    history: useHistory()
  })

  // const addItemToCart = (selectedProduct) => {
  //   dispatch(addCartItem(selectedProduct))
  //   fastSwitchToggleCart()
  // }
  //
  // const fastSwitchToggleCart = async () => {
  //   dispatch(openCart())
  //   await delay(1500)
  //   dispatch(closeCart())
  //   return true
  // }
  //

  return (items.map((product, idx) => (
    <div key={idx} className="catalog__product-container">
      <ProductCatalog
        key={product.images}
        onClickImage={(product) => setGoToProd(product)}
        product={product}
        // onAddCart={(product) => addItemToCart(product)}
      />
    </div>
  )))
}


CatalogProducts.defaultProps = {
  products: []
}

export default CatalogProducts
