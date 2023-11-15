import React from "react";
import "../css/GroupComp.css"
import image from "../image/profile.png"

function GroupComp3(){
    return(
        <div className="groupContainer">
            <div className="topGroupConp">
                <div>
                    <img src={image} title="김XX" />
                    <img src={image} title="박XX" />
                </div>
                <div className="groupDate2">
                    <h3>생성 날짜: 20XX-XX-XX</h3>
                </div>
            </div>
            <hr />
            <div>
                <h1>그룹명3</h1>
            </div>
        </div>
    )
}
export default GroupComp3