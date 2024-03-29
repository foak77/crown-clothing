import React, { Component } from 'react'
import './App.css';

import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import Header from './components/Header/Header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import {auth, createUserProfileDocument } from './firebase/firebaseUtils'

//redux
import {createStructuredSelector} from "reselect";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/userRedux/userActions';
import { selectCurrentUser } from './redux/userRedux/userSelectors';

class App extends Component {

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header/>
      <Switch>
        <Route  exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
        <Route  exact path="/checkout" component={CheckoutPage}/>
        <Route  exact path="/signin" render= {()=>this.props.currentUser ? (<Redirect to="/"/>): (<SignInAndSignUpPage />)}/>
      </Switch>
    </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);