import React from 'react'
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "./../../assets/crown.svg"
import CartIcon from './../CartIcon/CartIcon'
import CartDropDown from './../CartDropDown/CartDropDown'
import { createStructuredSelector } from 'reselect'
import {auth} from "./../../firebase/firebaseUtils"
import "./Header.scss";

//redux
import { connect } from 'react-redux';
import {selectCartHidden} from "./../../redux/cartRedux/cartSelectors"
import {selectCurrentUser} from "./../../redux/userRedux/userSelectors"

function Header({ currentUser, hidden}) {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                { currentUser ? (
                <div className="option" onClick={()=>auth.signOut()}>
                    SIGN OUT
                </div>
                ):(
                <Link to="/signin" className="option">
                    SIGN IN
                </Link>)
                }
                <CartIcon/>
            </div>
            { hidden ? null : <CartDropDown/>}
        </div>      
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header)
