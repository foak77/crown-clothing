import React from 'react'
import CustomButton from "./../CustomButton/CustomButtom"
import CartItem from './../CartItem/CartItem'
import {createStructuredSelector} from "reselect"
import { withRouter } from 'react-router-dom'
import "./CartDropDown.scss"

//Redux
import {connect} from "react-redux"
import {selectCartItems} from "./../../redux/cartRedux/cartSelectors"
import { toggleCartHidden } from "./../../redux/cartRedux/cartActions"

function CartDropDown({cartItems, history, dispatch}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                cartItems.length ?
                cartItems.map((cartItem)=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                :
                <span className="empty-message">Your Cart is Empty</span>
                }
            </div>
            <CustomButton onClick={()=>{
                history.push("/checkout");
                dispatch(toggleCartHidden())
                }}>
                    GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });
  
  export default withRouter(connect(mapStateToProps)(CartDropDown));
  