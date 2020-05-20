import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingBag} from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import Container from "../Container/Container";
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

const Header = ({openShoppingCart, openSearch}) => {

  const {
    Cart: { items = [] },
    Products: { items: productItems },
  } = useSelector(state => state)

  let outputBadge;
  if(items.length){
    outputBadge = <span className="bag-badget">{items.length}</span>
  }

  console.log(productItems)
  // producar a respeito da funcao reduce, para pegar todos as cores da lista e colocar em um array
  // tirar as cores duplicadas
  // listar os botoes com base nas cores
  // ao clicar em um botao setar a cor para um estado local (vide useState)
  // crirar uma variavel que irá receber a nova lista
  // setar ass nova lista no redux
  // actions/products => setProducts (aqui tem a action para setar no redux)

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
      <Container>
        <div style={{ width: '100%'}}>
          <ul style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <li><button>Azul</button></li>
            <li><button>PRETO</button></li>
            <li><button>AMARELO</button></li>
            <li><button>ROSA</button></li>
            <li><button>VERDE</button></li>
          </ul>
        </div>
      </Container>
    </header>
  );
}

export default Header;
