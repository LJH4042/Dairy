import React from "react";
import "../css/GroupComp.css"
import image from "../image/profile.png"

function GroupComp2(){
    return(
        <div className="groupContainer">
            <div className="topGroupConp">
                <div>
                    <img src={image} title="여X철" />
                    <img src={image} title="이X혁" />
                </div>
                <div className="groupDate2">
                    <h3>생성 날짜: 20XX-XX-XX</h3>
                </div>
            </div>
            <hr />
            <div>
                <h1>그룹명2</h1>
            </div>
        </div>
    )
}
export default GroupComp2