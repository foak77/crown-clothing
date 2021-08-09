import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import Header from './components/Header/Header';
import {auth} from './firebase/firebaseUtils'
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null,
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount = () => {
    auth.onAuthStateChanged((user)=>{
      this.setState({
        currentUser: user
      })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route  exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
        <Route  path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
    )
  }
}

export default App;