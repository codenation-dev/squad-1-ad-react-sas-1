import React from "react";
import CartItem from '../CartItem';
import './Search.scss'
import Cart from "../Cart";

const Search = ({itens, value, closeSearch, active}) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cardItemVisibilityConfig = {
    removeButton: false,
    size: false,
    quantity: false,
  }

  return (
    <Cart
      onClose={closeSearch}
      title={`Digite algo`}
      active={active}
    >
      <Container className="search">

        <div className="search__input-container">
          <div className="form-field">
            <input type="text"/>
          </div>
          <div className="search__product-numbers">5 items</div>
        </div>

        <div className="search__content">
          <ul className="search__content-full">
            {
              arr.map((item,idx) => (
                <li className="search__content-item">
                  <CartItem
                    visibilityConfig={cardItemVisibilityConfig}
                    key={idx}
                    title="Teste"
                    price="12"
                    size="M"
                  />
                </li>
              ))
            }
          </ul>
          <div className="search__content-empty">
           <span>
               Seu carrinho está vazio :(
           </span>
          </div>
        </div>
      </Container>
    </Cart>
  )

  // return(
  //     // <aside className= "minicart__overlay">
  //     //     <div className= "minicart__modal" >
  //     //         <div className= "minicart__header">
  //     //             <button
  //     //               className= "button-close"
  //     //               type= "button"
  //     //               name= "close cart button"
  //     //               onClick={closeSearch}>
  //     //               X
  //     //             </button>
  //     //             <span>
  //     //                 Busca
  //     //                 <input type="text" className="content__search"/>
  //     //             </span>
  //     //         </div>
  //     //         <div className= "minicart__content">
  //     //             <ul className= "mincart__content-full">
  //     //                 {
  //     //                   arr.map(item => (
  //     //                     <CartItem
  //     //                       title="Teste"
  //     //                       price="12"
  //     //                       size="M"
  //     //                     />
  //     //                   ))
  //     //                 }
  //     //             </ul>
  //     //             <div className= "minicart__content-empty">
  //     //                 <span>
  //     //                     Seu carrinho está vazio :(
  //     //                 </span>
  //     //             </div>
  //     //         </div>
  //     //         <div className= "minicart__footer">
  //     //             <div className= "minicart__footer__button">
  //     //                 <span className= "minicart__footer-full">
  //     //                     Subtotal R${value}
  //     //                 </span>
  //     //                 <a>
  //     //                 <span className="minicart__footer-empty">
  //     //                     Continuar comprando
  //     //                 </span>
  //     //                 </a>
  //     //             </div>
  //     //         </div>
  //     //     </div>
  //     // </aside>
  // )
}

export default Search;
