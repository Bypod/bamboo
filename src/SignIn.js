import React, { useState } from 'react'
import logo from './media/big-logo.svg'
import "./signin.css"
import { Route, Routes, BrowserRouter as Router , Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignIn() {


    const [usernameText, setUsernameText] = useState("")

    const navigate = useNavigate();

    let usernameTextUpdated = (e)=>{
        setUsernameText(e.target.value)
        localStorage.setItem('username', e.target.value)
    }

    let handleLogClick = (e)=>{
        navigate('/home')
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
                                <input type="text" id="password-input" class="input-box" placeholder="password" />
                                <br />
                                <input type="checkbox" id="remember-me" name="remember-me" value="Remember" />
                                <label for="remember-me">Remember me?</label>
                                <br />
                                <h4 id="sign-up-link">
                                or sign up now
                                    {/*  figure out how to link this to the sign up page */}
                                </h4>
                            </div>
                            <div className="box-footer">
                                <h4><a href="" id="forgot-pass">forgot password?</a></h4>
                                {/* <input type="submit" value="Log In" id="enter-button" /> */}
                                <button onClick={handleLogClick}><a id="enter-button">Log In</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        
    )
}
