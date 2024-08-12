// import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './signup.css'
import { useState } from 'react'

const Signup = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        user: "",
        email: "",
        password: ""
    });

    // to store localstorage
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userval", JSON.stringify(input))
        navigate("/signin");
    }
    return (
        <div className='RegisterPage'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className="col">
                        <label htmlFor="">Name</label>
                        <input name="user" value={input.user} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="text" id="username" placeholder='Enter username' />
                    </div>
                    <div className="col">
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" id="email" placeholder='Enter Email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                    </div>
                    <div className='col'>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="pass" placeholder='Password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="col">
                        <button className='btn' type='submit'>Signup</button>
                    </div>
                    <div className="col">
                        <p>Already have account? <Link type='submit' to="/signin">Login</Link></p>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Signup