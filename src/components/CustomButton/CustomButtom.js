import React from 'react'
import "./CustomButtom.scss"

function CustomButtom({children, isGoogleSignIn, ...otheProps}) {
    return (
        <button className={`${ isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otheProps}>
            {children}
        </button>
    )
}

export default CustomButtom
