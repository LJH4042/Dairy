import React from "react";
import "../css/FriendsList.css"
import image from "../image/profile.png"

function FriendsList(){
    return(
        <div className="friendList">
            <h3>친구 목록</h3>
            <ul>
                <li>
                    <img src={image} />
                    <h3>여X철</h3>
                </li>
                <li>
                    <img src={image} />
                    <h3>이X혁</h3>
                </li>
                <li>
                    <img src={image} />
                    <h3>이X호</h3>
                </li>
            </ul>
        </div>
    )
}
export default FriendsList