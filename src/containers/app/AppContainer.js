import React from 'react'
import './style.scss'

const AppContainer = ({ children, overlay }) => {

    const hasOverlay = overlay ? 'has--overlay' : ''
    return (
        <div className={`app-container ${hasOverlay}`.trim()}>
            {children}
        </div>
    )
}

export  default  AppContainer
