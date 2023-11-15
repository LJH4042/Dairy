import React, { useRef, useState } from "react";
import Dairy from "../components/Dairy";
import "../css/DairyList.css"
import DairyWrite from "../components/DairyWrite";
import Header2 from "../components/Header2";
import { useNavigate } from "react-router-dom";

function DairyList(){
    const [show, setShow] = useState(false);
    const handleShow = () => setShow((show) => !show)

    const navigate = useNavigate()
    const goToMyPage = () => {navigate("/MyPage")}

    const [dairyData, setDairytData] = useState([]) //todo리스트 빈 배열 생성
    const idKey = useRef(0) //Dairy의 id값 초기값을 0으로 지정
    const addDairy = (title, name ,content) => { //Dairy todo리스트 추가 함수 -> DairyWrite로 넘김
        const newDairy = { //새로 입력한 Dairy를 새로 지정
            title,
            date: new Date().toLocaleString(), //입력한 날짜, 시간
            name,
            content,
            id: idKey.current
        }
        idKey.current += 1 //id값을 1씩 증가
        setDairytData([newDairy, ...dairyData]) //새로 입력한 Dairy를 위에서부터 배열에 추가
    }

    const editDairy = (id, editContent) => {
        setDairytData(dairyData.map((data) => data.id === id ? {...data, content: editContent} : data)) //해당 ID의 content 값만 변경
    }

    const deleteDairy = (id) => {
        const newDairyList = dairyData.filter((data) => data.id !== id) //해당 ID를 제외하고 다른 ID들로만 새로운 배열 생성
        setDairytData(newDairyList)
    }

    return(
        <div>
            <div>
                <Header2 />
            </div>
            <div className="listContainer">
                <h1 className="listTitle">Group 1</h1>
                <p className="listSubTitle">-tell your story.-</p>
                <hr />
                <div>
                    <p className="memberList">Member: 김XX / 이XX / 박XX</p>
                    <button className="showButton" onClick={handleShow}>{show ? "Hide" : "Write"}</button>
                    <button className="showButton" onClick={goToMyPage}>Back</button>
                    {show ? <DairyWrite addDairy={addDairy} /> : null}
                    {dairyData.map((dairy => {
                        return(
                            <Dairy key={dairy.id} {...dairy} deleteDairy={deleteDairy} editDairy={editDairy} />
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}
export default DairyList