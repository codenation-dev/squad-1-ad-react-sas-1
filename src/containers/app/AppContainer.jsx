import React, {useEffect} from 'react'
import './style.scss'
import Footer from "../../components/Footer";
import {useDispatch} from "react-redux";
import {setLoading, setInitialized} from "../../actions/app";
import {setProducts} from "../../actions/products";
import getData from "../../services";
import {delay} from "../../modules/time";

const AppContainer = ({children, overlay}) => {

  const hasOverlay = overlay ? 'has--overlay' : ''
  const body = window.document.querySelector('body')

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(false))
      const { data: products } = await getData()

      await delay()

      dispatch(setLoading(true))
      dispatch(setProducts(products))
      dispatch(setInitialized(true))

      setInitialized(true)
    };

    fetchProducts()
  },[])

  useEffect(() => {
    body.style.overflowY = overlay ? 'hidden' : 'scroll'
  }, [overlay])
  return (
    <div className={`app-container ${hasOverlay}`.trim()}>
      {children}
      <Footer />
    </div>
  )
}

export default AppContainer
