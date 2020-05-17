import React, {useState, useEffect} from "react";
import "./style.scss";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setLoading} from "../../actions/app";
import {setProducts} from "../../actions/products";
import getData from "../../services";
import Container from "../../components/Container";
import CatalogLoading from "./components/CatalogLoading";
import CatalogProducts from "./components/CatalogProducts";

const Catalog = () => {
  const [initialized, setInitialized] = useState(false)
  const {
    Info: { loading },
    Products: { items }
  } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(false))
      const { data: products } = await getData()

      setTimeout(() =>{
        dispatch(setLoading(true))
        dispatch(setProducts(products))

        setInitialized(true)
      }, 0)
    };

    fetchProducts()
  },[])

  const isInitialized = !initialized && !loading

  return (
    <div className="catalog">
      <Container className="catalog__itens">
        { isInitialized
          ? <CatalogLoading />
          : <CatalogProducts items={items}/>
        }
      </Container>
    </div>
  );
}

export default Catalog;
