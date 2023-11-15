import React, { useState } from "react";
import "../css/Header.css"
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate("/Login")
        window.location.replace("/login") //로그아웃 기능
    }
    const goToRegister = () => {navigate("/Register")}
    const goToHome = () => {navigate("/")}

    return(
        <div className="wrapper">
            <h1 className="title" onClick={goToHome}>Our Dairy</h1>
            {false ?
                <nav>
                    <p className="userName">username</p>
                    <p className="routeP" onClick={goToLogin}>Logout</p>
                </nav> : 
                <nav>
                    <p className="routeP" onClick={goToLogin}>Login</p>
                    <p className="routeP" onClick={goToRegister}>Register</p>
                </nav>}
        </div>
    )
}
export default Header