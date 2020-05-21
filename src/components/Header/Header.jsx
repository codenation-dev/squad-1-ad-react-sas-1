import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingBag, faHeart} from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import Container from "../Container/Container";
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

const Header = ({openShoppingCart, openSearch, openFavorites}) => {

  const { Cart: { items = [] }} = useSelector(state => state)

  let outputBadge;
  if(items.length){
    outputBadge = <span className="bag-badget">{items.length}</span>
  }

  return (
    <header className="main-header">
      <Container>
        <Link to="/" className="main-header__link">
          <h1 className="main-header__title">BARRY&BERRY</h1>
        </Link>
        <div className="main-header__icons-container">
          <span className="main-header__subtitle">CONTATOS</span>
          <span className="main-header__subtitle">MINHA CONTA</span>
          <button className="main-header__icons"
                  onClick={openFavorites}>
            <FontAwesomeIcon
              icon={faHeart}
              color="#000"
              size="lg"/>
          </button>
          <button className="main-header__icons"
                  onClick={openSearch}>
            <FontAwesomeIcon
              icon={faSearch}
              color="#000"
              size="lg"/>
          </button>
          <button
            className="main-header__icons icon__bag"
            onClick={openShoppingCart}>
            <FontAwesomeIcon
              icon={faShoppingBag}
              color="#000"
              size="lg"/>
            { outputBadge }
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
