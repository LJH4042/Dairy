import React, { useState } from "react";
import "../css/Header.css"
import { useNavigate } from "react-router-dom";

function Header2(props){ 
    const [username, setUsername] = useState("")

    const navigate = useNavigate()
    const goToLogin = () => {navigate("/Login")}
    const goToMyPage = () => {navigate("/MyPage")}

    return(
        <div>
            <div className="wrapper">
                <h1 className="title" onClick={goToMyPage}>Our Dairy</h1>
                <nav>
                    <p className="userName">{username}</p>
                    <p className="routeP" onClick={goToLogin}>Logout</p>
                </nav>
            </div>
        </div>
    )
}
export default Header2