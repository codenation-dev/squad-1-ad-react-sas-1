import React, {useEffect, useState} from "react";
import {useLocation, useHistory} from 'react-router-dom'
import {useSelector} from "react-redux";
import {findProductByNameAndSlug} from "../../modules/redux/cart/helpers";
import Loader from "../../components/Loader";
import debouce from 'lodash.debounce'

import './style.scss'
import ProductFullContent from "../../components/ProductFullContent";
import {delay} from "../../modules/time";

const ProductContainer = () => {
  const location = useLocation()
  const history = useHistory()
  const [initialized, setInitialized] = useState(false)
  const [output, setOuput] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { pathname, search } = location

  const productName = pathname.substring(9)
  const slug = search.substring(7)

  const {
    product, items
  } = useSelector(({ Products : { product, items } }) => ({  product, items }))

  useEffect(() => {
    items.length ? setInitialized(true) : setInitialized(false)
  },[items])

  useEffect(() => {
    if(initialized){
      if(product){
        setSelectedProduct(product)
      } else {
        setSelectedProduct(findProductByNameAndSlug(productName,slug,items))
      }

      if(selectedProduct){
        setOuput(<ProductFullContent product={selectedProduct} />)
      } else {
        setOuput(<div className="product-page__loader">
          <Loader />
        </div>)
      }

      setTimeout(() => {
        if(!selectedProduct && !product){
          history.push('/404')
        }
      }, 2000)
    }
  },[initialized, selectedProduct, items])

    return (
    <div className="product-page">
      {output}
    </div>
  )
}

export  default ProductContainer
