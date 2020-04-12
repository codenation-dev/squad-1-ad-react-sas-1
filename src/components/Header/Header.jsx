import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import Container from "../Container/Container";

function Header() {
    return (

            <header className="main-header">
                <Container>
                    <h1 className="main-header__title">Fashionista</h1>
                    <div>
                        <button className="main-header__icons">
                            <FontAwesomeIcon
                                icon={faSearch}
                                color="#000"
                                size="2x" />
                        </button>
                        <button className="main-header__icons icon__bag">
                            <FontAwesomeIcon
                                icon={faShoppingBag}
                                color="#000"
                                size="2x" />
                            <span className="bag-badget">90</span>
                        </button>
                    </div>
                </Container>
            </header>

    );
}

export default Header;
