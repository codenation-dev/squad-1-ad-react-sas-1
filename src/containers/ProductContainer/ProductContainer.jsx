import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom'
import {useSelector} from "react-redux";
import {findProductByNameAndSlug} from "../../modules/redux/cart/helpers";
import Loader from "../../components/Loader";

import './style.scss'
import ProductFullContent from "../../components/ProductFullContent";
import ProductCatalog from "../../components/ProductCatalog";

const ProductContainer = () => {
  const location = useLocation()
  const { pathname, search } = location

  const productName = pathname.substring(9)
  const slug = search.substring(7)
  let selectedProduct = null

  const {
    product, items
  } = useSelector(({ Products : { product, items } }) => ({  product, items }))

  let output;

  if(product){
    selectedProduct = product
  } else {
    selectedProduct = findProductByNameAndSlug(productName,slug,items)
  }

  if(selectedProduct){
    output =  <ProductCatalog onClickImage={() => {}} product={selectedProduct} />
  } else {
    output = <div className="product-page__loader">
      <Loader />
    </div>
  }

  return (
    <div className="product-page">
      {output}
    </div>
  )
}

export  default ProductContainer
