import React from 'react';
import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import {createStructuredSelector} from "reselect"
import "./CartIcon.scss";

//redux
import {connect} from "react-redux";
import {toggleCartHidden} from "./../../redux/cartRedux/cartActions";
import {selectCartItemsCount} from "./../../redux/cartRedux/cartSelectors"

function CartIcon({toggleCartHidden, itemCount}) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
