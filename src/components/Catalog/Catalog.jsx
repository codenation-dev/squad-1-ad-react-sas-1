import React, {useState, useEffect} from "react";
import getData from '../../services';
import Container from "../Container";
import ProductCatalog from "../ProductCatalog";
import {
  Link
} from "react-router-dom";
import "./style.scss";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setLoading} from "../../actions/app";
import {setProducts} from "../../actions/products";

const Catalog = () => {
  const [initialized, setInitialized] = useState(false)
  const loading = useSelector(state => state.appInfo.loading)
  const products = useSelector(state => state.appProducts.products)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(false))
      const { data: products } = await getData()

      setTimeout(() =>{
        dispatch(setLoading(true))
        dispatch(setProducts(products))
        setInitialized(true)
      }, 3000)
    };

    fetchProducts()
  },)

  const loadingPlaceholder = Array.from([1,2,3,4]).map((idx) => (
      <div key={idx} className="catalog__product-container">
        <ProductCatalog loading={true} />
      </div>
  ))

  const producList = products.map((product, idx) => (
    <Link key={idx} to="/product/exemplo" className="catalog__product-container">
      <ProductCatalog
        key={product.images}
        product={product}
      />
    </Link>
  ))

  const isInitialized = !initialized && !loading


  return (
    <div className="catalog">
      <Container className="catalog__itens">
        { isInitialized
          ? loadingPlaceholder
          : producList
        }
      </Container>
    </div>
  );
}

export default Catalog;
