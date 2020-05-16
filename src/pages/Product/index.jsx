import React from 'react';

import './style.scss';

import Container from '../../components/Container/Container';
import ProductFullContent from "../../components/ProductFullContent";

function Product() {
  return (
    <Container>
      <div className="product-page">
        <ProductFullContent />
      </div>
    </Container>
  )
}

export default Product;
