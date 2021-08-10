import React from 'react'
import CustomButton from "./../CustomButton/CustomButtom"
import "./CartDropDown.scss"

function CartDropDown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropDown
