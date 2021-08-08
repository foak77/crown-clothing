import React from 'react'
import "./CustomButtom.scss"

function CustomButtom({children, ...otheProps}) {
    return (
        <button className="custom-button" {...otheProps}>
            {children}
        </button>
    )
}

export default CustomButtom
