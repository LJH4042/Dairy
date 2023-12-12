import React, { useState } from "react";
import "../css/Header.css"
import { useNavigate } from "react-router-dom";

function Header2(props){ 
    const navigate = useNavigate()
    const goToHome = () => {navigate("/")}
    const goToMyPage = () => {navigate("/MyPage")}
    const goToLogin = () => {navigate("/Login")}

    const handleLogout = () => {
        localStorage.removeItem("token")
        goToLogin()
    }

    return(
        <div>
            <div className="wrapper">
                <h1 className="title" onClick={goToMyPage}>Our Diary</h1>
                <nav>
                    <p className="routeP" onClick={goToHome}>Home</p>
                    <p className="routeP" onClick={handleLogout}>Logout</p>
                </nav>
            </div>
        </div>
    )
}
export default Header2