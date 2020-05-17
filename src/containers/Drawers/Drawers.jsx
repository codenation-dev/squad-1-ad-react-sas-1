import React from "react";
import ShoppingCart from "../ShoppingCart";
import Search from "../Search";
import {useDispatch, useSelector} from "react-redux";
import {closeCart} from "../../actions/cart";
import {closeSearch} from "../../actions/search";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Drawers = () => {

  const dispatch = useDispatch()
  const { openCart, openSearch } = useSelector(state => ({
    openCart: state.Cart.open,
    openSearch: state.Search.open
  }))

  return(
    <React.Fragment>

      <ToastContainer />

      <ShoppingCart
        active={openCart}
        closeShoppingCart={() => dispatch(closeCart())}
      />

      <Search
        active={openSearch}
        closeSearch={() => dispatch(closeSearch())}
      />
    </React.Fragment>
  )
}

export default Drawers;
