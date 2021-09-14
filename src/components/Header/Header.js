import React from 'react';
import {ReactComponent as Logo} from "./../../assets/crown.svg";
import CartIcon from './../CartIcon/CartIcon';
import CartDropDown from './../CartDropDown/CartDropDown';
import { createStructuredSelector } from 'reselect';
import { auth } from "./../../firebase/firebaseUtils";
import "./Header.scss";
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from "./headerStyle"

//redux
import { connect } from 'react-redux';
import { selectCartHidden } from "./../../redux/cartRedux/cartSelectors"
import { selectCurrentUser } from "./../../redux/userRedux/userSelectors"

function Header({ currentUser, hidden}) {
    return (
        <HeaderContainer>
            <LogoContainer to="/" >
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop" >SHOP</OptionLink>
                <OptionLink to="/shop" >CONTACT</OptionLink>
                { currentUser ? (
                <OptionLink as="div" onClick={()=>auth.signOut()}>
                    SIGN OUT
                </OptionLink>
                ):(
                <OptionLink to="/signin" >
                    SIGN IN
                </OptionLink>)
                }
                <CartIcon/>
            </OptionsContainer>
            { hidden ? null : <CartDropDown/>}
        </HeaderContainer>      
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
