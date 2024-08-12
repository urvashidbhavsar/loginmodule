// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import './signin.css'

const Signin = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const handlelogin = (e) => {
        e.preventDefault();
        const loguser = JSON.parse(localStorage.getItem("userval"));
        if (input.email === loguser.email && input.password === loguser.password) {
            localStorage.setItem("loginuser", true)
            navigate("/Home")
        } else {
            alert("Invalid email and password")
        }
    }
    return (
        <div className='Loginpage'>
            <h1>Sign In</h1>
            <form onSubmit={handlelogin}>
                <div className='row'>
                    <div className="col">
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" id="email" placeholder='Enter Email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                    </div>
                    <div className='col'>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="pass" placeholder='Password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="col">
                        <button className='btn' type='submit'>Signin</button>
                    </div>
                    <div className="col">
                        <p>Dont have any account? <Link type='submit' to="/">Register</Link></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signin