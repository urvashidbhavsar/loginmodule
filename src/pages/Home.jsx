// import React from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const uservalue = JSON.parse(localStorage.getItem("userval"));

    const logout = () => {
        localStorage.removeItem("loginuser")
        navigate("/signin");
    }
    return (
        <div>
            <div className="homepage">
                <div className="homedata">
                    <h1>Welcome - <span>{uservalue.user}</span></h1>
                    <div>
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;