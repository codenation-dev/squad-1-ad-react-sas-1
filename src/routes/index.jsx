import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './../pages/Home';
import Product from './../pages/Product'; 
import ShoppingCart from './../pages/ShoppingCart'; 

export default function App(props) {
  return (
    <Router>
        { props.children }
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:product">
            <Product />
          </Route>
          
          {/* ROTA TEMPORARIA */}
          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </Switch>
    </Router>
  );
}