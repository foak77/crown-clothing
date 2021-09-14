import React from 'react';
// import "./CustomButtom.scss";
import {CustomButtonContainer} from "./customButtonStyle"

function CustomButtom({children, ...props}) {
    return (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButtom
