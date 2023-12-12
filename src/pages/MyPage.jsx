import React, { useEffect, useNavigate } from "react";
import "../css/MyPage.css"
import GroupComp from "../components/GroupComp";
import GroupComp2 from "../components/GroupComp2";
import GroupComp3 from "../components/GroupComp3";
import Header2 from "../components/Header2";
import FriendsList from "../components/FriendsList";

function MyPage(){
    useEffect(() => {
        if(localStorage.getItem('token') === null){
            alert("로그인 후 이용해주세요.")
            window.location.replace('http://localhost:3000/Login')
        }
    },[])

    return(
        <div>
            <div>
                <Header2 />
            </div>
            <div className="myPage">
                <h1 className="myPageTitle">My Group</h1>
                <p className="myPageSubTitle">-Talk to your friends.-</p>
                <hr />
                <div className="mainGroup">
                    <div className="groupComp">
                        <GroupComp />
                        <GroupComp2 />
                        <GroupComp3 />
                    </div>
                    <div className="friendList">
                        <FriendsList />
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default MyPage