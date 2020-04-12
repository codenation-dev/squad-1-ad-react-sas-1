import React from "react";
import Container from "../Container";
import ProductCatalog from "../ProductCatalog";
import {
  Link
} from "react-router-dom";
import "./style.scss";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="catalog">
        <Container className="catalog__itens">
          <Link to="/product/exemplo" className="catalog__product-container">
            <ProductCatalog
              product={{
                percentage: 10,
                name: "bolsa",
                price: 190.9,
                priceDiscount: 159.9,
                img: "https://via.placeholder.com/200x300.png?text=ProdutoBolsa",
              }}
            />
          </Link>

          <Link to="/product/exemplo" className="catalog__product-container">
            <ProductCatalog
              product={{
                percentage: 15,
                name: "calça",
                price: 190.9,
                img: "https://via.placeholder.com/200x300.png?text=ProdutoCalca",
              }}
            />
          </Link>

          <Link to="/product/exemplo" className="catalog__product-container">
            <ProductCatalog
              product={{
                percentage: 10,
                name: "bolsa",
                price: 190.9,
                priceDiscount: 159.9,
                img: "https://via.placeholder.com/200x300.png?text=ProdutoBolsa",
              }}
            />
          </Link>

          <Link to="/product/exemplo" className="catalog__product-container">
            <ProductCatalog
              product={{
                percentage: 15,
                name: "calça",
                price: 190.9,
                img: "https://via.placeholder.com/200x300.png?text=ProdutoCalca",
              }}
            />
          </Link>

        </Container>
      </div>
    );
  }
}

export default Catalog;
