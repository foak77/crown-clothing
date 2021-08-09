import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import Header from './components/Header/Header';
import {auth, createUserProfileDocument } from './firebase/firebaseUtils'
import { setCurrentUser } from './redux/userRedux/userActions';

//redux
import { connect } from 'react-redux';
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
        <Route  path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);