// import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const protectedRoutes = () => {
    const auth = localStorage.getItem("loginuser");
    return auth ? <Outlet /> : <Navigate to={"/signin"} />
}

export default protectedRoutes