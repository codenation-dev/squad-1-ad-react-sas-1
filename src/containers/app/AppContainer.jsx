import React, {useEffect} from 'react'
import './style.scss'
import Footer from "../../components/Footer";

const AppContainer = ({children, overlay}) => {

  const hasOverlay = overlay ? 'has--overlay' : ''
  const body = window.document.querySelector('body')

  useEffect(() => {
    body.style.overflowY = overlay ? 'hidden' : 'scroll'
  }, [overlay, body])
  return (
    <div className={`app-container ${hasOverlay}`.trim()}>
      {children}
      <Footer />
    </div>
  )
}

export default AppContainer
