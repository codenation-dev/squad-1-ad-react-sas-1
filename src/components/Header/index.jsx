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
          <h1 className="main-header__title">BARRY&BERRY</h1>
        </Link>
        <div>
          <span className="main-header__subtitle">CONTATO</span>
          <span className="main-header__subtitle">MINHA CONTA</span>
          <button className="main-header__icons"
                  onClick={openSearch}>
            <FontAwesomeIcon
              icon={faSearch}
              color="#000"
            />
          </button>
          <button
            className="main-header__icons icon__bag"
            onClick={openShoppingCart}>
            <FontAwesomeIcon
              icon={faShoppingBag}
              color="#000"
            />
            <span className="bag-badget">10</span>
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
