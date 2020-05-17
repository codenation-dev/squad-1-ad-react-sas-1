import React from 'react'
import './style.scss'
import store from "../../store";
import {Provider} from "react-redux";
import Footer from "../../components/Footer";

const AppContainer = ({children, overlay}) => {

  const hasOverlay = overlay ? 'has--overlay' : ''
  return (
    <div className={`app-container ${hasOverlay}`.trim()}>
      {children}
      <Footer />
    </div>
  )
}

export default AppContainer
