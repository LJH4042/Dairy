import React, { useState } from "react";
import "../css/Header.css"
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate()
    const goToLogin = () => {navigate("/Login")}
    const goToRegister = () => {navigate("/Register")}
    const goToHome = () => {navigate("/")}
    const goToMyPage = () => {navigate("/MyPage")}

    return(
        <div className="wrapper">
            <h1 className="title" onClick={goToHome}>Our Diary</h1>
            <nav>
                <p className="routeP" onClick={goToLogin}>Login</p>
                <p className="routeP" onClick={goToRegister}>Register</p>
                <p className="routeP" onClick={goToMyPage}>MyPage</p>
            </nav>
        </div>
    )
}
export default Header