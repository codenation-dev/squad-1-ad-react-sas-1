import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingBag} from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import Container from "../Container/Container";
import {Link} from 'react-router-dom';

function Header({openShoppingCart, openSearch}) {
  return (
    <header className="main-header">
      <Container>
        <Link to="/" className="main-header__link">
          <h1 className="main-header__title">Fashionista</h1>
        </Link>
        <div>
          <button className="main-header__icons"
                  onClick={openSearch}>
            <FontAwesomeIcon
              icon={faSearch}
              color="#000"
              size="2x"/>
          </button>
          <button
            className="main-header__icons icon__bag"
            onClick={openShoppingCart}>
            <FontAwesomeIcon
              icon={faShoppingBag}
              color="#000"
              size="2x"/>
            <span className="bag-badget">90</span>
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
