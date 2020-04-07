import React from 'react';
import Container from '../Container';
import ProductCatalog from '../ProductCatalog';
import './style.scss';

class Catalog extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
        <div className="catalog">
            <Container className="catalog__itens">
                <ProductCatalog product={{ 
                    porcentage: 10, 
                    name: "bolsa", 
                    price: 190.90, 
                    priceDiscount: 159.90, 
                    img: "https://via.placeholder.com/200x300.png?text=ProdutoBolsa"}} 
                />

                <ProductCatalog product={{ 
                    porcentage: 15, 
                    name: "calça", 
                    price: 190.90, 
                    img: "https://via.placeholder.com/200x300.png?text=ProdutoCalca" }} 
                />

                <ProductCatalog product={{ 
                    porcentage: 10, 
                    name: "bolsa", 
                    price: 190.90, 
                    priceDiscount: 159.90, 
                    img: "https://via.placeholder.com/200x300.png?text=ProdutoBolsa"}} 
                />

                <ProductCatalog product={{ 
                    porcentage: 15, 
                    name: "calça", 
                    price: 190.90, 
                    img: "https://via.placeholder.com/200x300.png?text=ProdutoCalca" }} 
                />

                <ProductCatalog product={{ 
                    porcentage: 15, 
                    name: "calça", 
                    price: 190.90, 
                    img: "https://via.placeholder.com/200x300.png?text=ProdutoCalca" }} 
                />
                <ProductCatalog product={{ 
                    porcentage: 15, 
                    name: "calça", 
                    price: 190.90, 
                    img: "https://via.placeholder.com/200x300.png?text=ProdutoCalca" }} 
                />

                <ProductCatalog product={{ 
                    porcentage: 15, 
                    name: "calça", 
                    price: 190.90, 
                    img: "https://via.placeholder.com/200x300.png?text=ProdutoCalca" }} 
                />
            </Container>
        </div>);
    }
};

export default Catalog;