import React, { Component } from 'react'
import FormInput from './../FormInput/FormInput'
import CustomButtom from './../CustomButton/CustomButtom'
import { signInWithGoogle } from './../../firebase/firebaseUtils'
import "./SignIn.scss"

export class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:"",
        }
    }

    handlesubmit = (event) =>{
        event.preventDefault();

        this.setState({
            email:"",
            password:"",
        })
    }

    handlechange = (event) =>{
        const {value, name} = event.target;
        this.setState({[name]:value})
    }
    
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handlesubmit}>
                    <FormInput
                    name="email"
                    type="email"
                    value={this.state.email}
                    handlechange={this.handlechange}
                    label="email"
                    required
                    />
                    
                    <FormInput
                    name="password"
                    type="password"
                    value={this.state.password}
                    handlechange={this.handlechange}
                    label="password" required
                    />
                    
                    <div className="buttons">
                    <CustomButtom type="submit">Sign In</CustomButtom>
                    <CustomButtom type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In w/ GOOGLE</CustomButtom>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
