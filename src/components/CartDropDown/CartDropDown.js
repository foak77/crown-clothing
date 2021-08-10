import React from 'react'
import CustomButton from "./../CustomButton/CustomButtom"
import CartItem from './../CartItem/CartItem'
import "./CartDropDown.scss"

//Redux
import {connect} from "react-redux"
import {selectCartItems} from "./../../redux/cartRedux/cartSelectors"

function CartDropDown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map((cartItem)=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
  });
  
  export default connect(mapStateToProps)(CartDropDown);
  