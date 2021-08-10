import React from 'react'
import "./CustomButtom.scss"

function CustomButtom({children, isGoogleSignIn, inverted,...otheProps}) {
    return (
        <button className={`${inverted?"inverted":""} ${ isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otheProps}>
            {children}
        </button>
    )
}

export default CustomButtom
