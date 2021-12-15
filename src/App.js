import React from 'react'
import SignIn from './SignIn'
import Home from './Home'
import SignUp from './SignUp';
import Friends from './Friends';
import { Route, Routes, BrowserRouter as Router , Link } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
            </div>
            <Routes>
                <Route exact path="/" element={<SignIn/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/friends" element={<Friends/>}/>
            </Routes>
        </Router>
    )
}
