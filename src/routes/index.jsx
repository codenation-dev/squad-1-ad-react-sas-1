import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './../pages/Home';
import Product from './../pages/Product';
import Header from "../components/Header";
import AppContainer from "../containers/app/AppContainer";
import {useDispatch, useSelector} from "react-redux";
import Drawers from "../containers/Drawers/Drawers";
import {openCart} from "../actions/cart";
import {openSearch} from "../actions/search";

export default function App() {
  const hasOverlay = useSelector(state => {
     const {
       Search: { open: openSearch },
       Cart: { open: openCart }
     } = state

    return openCart || openSearch
  })

  const dispatch = useDispatch()

  return (
    <Router>
      <AppContainer overlay={hasOverlay}>

        <Drawers />

        <Header
          openShoppingCart={() => dispatch(openCart())}
          openSearch={() => dispatch(openSearch())}
        />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/product/:product">
            <Product/>
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}
