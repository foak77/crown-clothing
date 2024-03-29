import React, { Component } from 'react'
import FormInput from "./../FormInput/FormInput"
import CustomButtom from "../CustomButton/CustomButtom"
import { auth, createUserProfileDocument } from "./../../firebase/firebaseUtils"
import "./SignUp.scss"
class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayName:"",
             email:"",
             password:"",
             confirmPassword:"",
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const {displayName, email, password, confirmPassword} = this.state;
        
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
         
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:"",
            });
        } catch (error){
            console.log(error)
        }
    };

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]:value});
    }
    
    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Email"
                    required
                    />

                    <FormInput
                    type="email" 
                    name="emai"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                    />

                    <FormInput
                    type="password" 
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                    />

                    <FormInput
                    type="password" 
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Passowrd"
                    required
                    />

                    <CustomButtom type="submit">SIGN UP</CustomButtom>
                </form>  
            </div>
        )
    }
}

export default SignUp;