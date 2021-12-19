//imports
import React, { useState } from 'react'
import logo from './media/big-logo.svg'
import "./signin.css"
import { Route, Routes, BrowserRouter as Router , Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignIn() {

    //use states
    const [usernameText, setUsernameText] = useState("")
    const [passwordText, setPasswordText] = useState("")

    //navigate function for when user logs in and if statement added to make sure that theyb input username and password
    const navigate = useNavigate();
    let handleLogClick = (e)=>{
        if(usernameText === "" || passwordText === "") {
            alert("Must enter username AND password")
        } else {
            navigate('/home')
        } 
    }

    //password text box
    let passwordTextUpdated = (e)=>{
        setPasswordText(e.target.value)
        localStorage.setItem('password', e.target.value)
    }
    //username text box
    let usernameTextUpdated = (e)=>{
        setUsernameText(e.target.value)
        localStorage.setItem('username', e.target.value)
    }

   


    return (
        <body>
                <div class="signin-main-container">
                    <div className="signin-box">
                        <div className="box-contents">
                            <div className="logo">
                                <img src={logo} alt="bamboo gaming logo" />
                                
                                <h1>
                                    Sign In
                                </h1>
                            </div>
                            <div className="middle">
                                <input 
                                type="text" 
                                id="username-input" 
                                class="input-box" 
                                placeholder="username" 
                                onChange={usernameTextUpdated}
                                value={usernameText}/>
                                <br />
                                <input 
                                type="password" 
                                id="password-input" 
                                class="input-box" 
                                placeholder="password" 
                                onChange={passwordTextUpdated}
                                value={passwordText}
                                />
                                <br />
                                <input type="checkbox" id="remember-me" name="remember-me" value="Remember" />
                                <label for="remember-me">Remember me?</label>
                                <br />
                                <h4 id="sign-up-link">
                                or sign up now
                                </h4>
                            </div>
                            <div className="box-footer">
                                <h4><a href="" id="forgot-pass">forgot password?</a></h4>
                                <button onClick={handleLogClick}><a id="enter-button">Log In</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        
    )
}
