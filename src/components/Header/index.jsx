import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import Container from "../Container/Container";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="main-header">
            <Container>
                <Link to="/" className="main-header__link">
                    <h1 className="main-header__title">Fashionista</h1>
                </Link>
                <div>
                    <button className="main-header__icons">
                        <FontAwesomeIcon
                            icon={faSearch}
                            color="#000"
                            size="2x" />
                    </button>
                    <Link to="/cart" className="main-header__link">
                        <button className="main-header__icons icon__bag">
                            <FontAwesomeIcon
                                icon={faShoppingBag}
                                color="#000"
                                size="2x" />
                            <span className="bag-badget">90</span>
                        </button>
                    </Link>
                </div>
            </Container>
        </header>
    );
}

export default Header;
