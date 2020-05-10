import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './../pages/Home';
import Product from './../pages/Product'; 
import ShoppingCart from '../components/ShoppingCart'; 
import Header from "../components/Header";
import Search from "../components/Search";

export default function App() {
  const [ isShoppingCartOpen, setIsShoppingCartOpen ] = useState(false);
  const [ isSearchOpen, setIsSearchOpen ] = useState(false);

  return (
    <Router>
        { isShoppingCartOpen &&
          <ShoppingCart
            closeShoppingCart={() => setIsShoppingCartOpen(false)}
          />
        }
        { isSearchOpen &&
          <Search
            closeSearch={() => setIsSearchOpen(false)}
          />
        }
        <Header
          openShoppingCart={() => setIsShoppingCartOpen(true)}
          openSearch={() => setIsSearchOpen(true)}
          />

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/product/:product">
                <Product />
            </Route>
        </Switch>
    </Router>
  );
}