import React from "react";
import ShoppingCart from "../ShoppingCart";
import Search from "../Search";
import {useDispatch, useSelector} from "react-redux";
import {closeCart} from "../../actions/cart";
import {closeSearch} from "../../actions/search";
import {closeFavorites} from "../../actions/favorite";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favorites from "../Favorites";

const Drawers = () => {

  const dispatch = useDispatch()
  const { openCart, openSearch, openFavorites } = useSelector(state => ({
    openCart: state.Cart.open,
    openSearch: state.Search.open,
    openFavorites: state.Favorites.open
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

      <Favorites
        active={openFavorites}
        closeSearch={() => dispatch(closeFavorites())}
      />
    </React.Fragment>
  )
}

export default Drawers;
