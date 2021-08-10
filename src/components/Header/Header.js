import React from 'react'
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "./../../assets/crown.svg"
import CartIcon from './../CartIcon/CartIcon'
import CartDropDown from './../CartDropDown/CartDropDown'
import {auth} from "./../../firebase/firebaseUtils"
import "./Header.scss";

//redux
import { connect } from 'react-redux';

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

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header)
