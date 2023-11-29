import React, { useState } from "react";
import "../css/Header.css"
import { useNavigate } from "react-router-dom";

function Header2(props){ 
    const [username, setUsername] = useState("")

    const navigate = useNavigate()
    const goToLogin = () => {navigate("/Login")}
    const goToMyPage = () => {navigate("/MyPage")}

    const handleLogout = () => {
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("username")
        goToLogin()
    }

    return(
        <div>
            <div className="wrapper">
                <h1 className="title" onClick={goToMyPage}>Our Diary</h1>
                <nav>
                    <p className="userName">{username}</p>
                    <p className="routeP" onClick={handleLogout}>Logout</p>
                </nav>
            </div>
        </div>
    )
}
export default Header2