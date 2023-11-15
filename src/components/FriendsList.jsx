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
                    <h3>이XX</h3>
                </li>
                <li>
                    <img src={image} />
                    <h3>박XX</h3>
                </li>
            </ul>
        </div>
    )
}
export default FriendsList