import React from "react";
import "../css/GroupComp.css"
import image from "../image/profile.png"
import { useNavigate } from "react-router-dom";

function GroupComp(){
    const navigate = useNavigate()
    const goToDairyList = () => {navigate("/DairyList")}

    return(
        <div className="groupContainer" onClick={goToDairyList}>
            <div className="topGroupConp">
                <div>
                    <img src={image} title="여X철" />
                    <img src={image} title="이X혁" />
                    <img src={image} title="이X호" />
                </div>
                <div className="groupDate">
                    <h3>생성 날짜: 20XX-XX-XX</h3>
                </div>
            </div>
            <hr />
            <div>
                <h1>그룹명1</h1>
            </div>
        </div>
    )
}
export default GroupComp