import React, { useState, useEffect } from "react";
import getData from '../../services';
import Container from "../Container";
import ProductCatalog from "../ProductCatalog";
import {
  Link
} from "react-router-dom";
import "./style.scss";

const Catalog = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() =>{
    getData().then(response => {
      console.log(response.data);
      setProducts(
          response.data);
  })
  }, []) 
  
  return (
    <div className="catalog">
      <Container className="catalog__itens">
        {
          products.map((product, index)=>(
            <Link key={index} to="/product/exemplo" className="catalog__product-container">
              <ProductCatalog
                product={product}
              />
            </Link>
          ))
        }


        {/* <Link to="/product/exemplo" className="catalog__product-container">
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
        </Link> */}

      </Container>
    </div>
  );
}

export default Catalog;
