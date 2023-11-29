import React, { useState } from "react";
import "../css/DairyWrite.css"

function DairyWrite({addDairy}){ //DairyList 사이에서 addDairy 함수를 전달
    const [writeState, setWriteState] = useState({
        title: "", //name: value
        name: "",
        content: ""
    })

    const handleWriteState = (event) => {
        setWriteState({
            ...writeState, //writeState 객체를 나열 ([title, content]로 나열)
            [event.target.name]: event.target.value //객체 이름을 찾아 그 값을 지정
        })
    }

    const handleWriteSubmit = (event) => {
        event.preventDefault()
        addDairy(writeState.title, writeState.name ,writeState.content) //입력값을 DairyList로 보냄
        alert("등록 되었습니다.")
        setWriteState({
            title: "",
            name: "",
            content: ""
        })
        /*fetch("api", {
            method: "POST",
            body: JSON.stringify({
                title: writeState.title,
                name: writeState.name,
                content: writeState.content
            })
        }).then(response => response.json())
        .then((result) => addDairy(writeState.title, writeState.name ,writeState.content))*/
    }

    return(
        <div className="writeForm">
            <form onSubmit={handleWriteSubmit}>
                <p>Write your Today Story</p>
                <div>
                    <input type="text" name="title" value={writeState.title} onChange={handleWriteState} required placeholder="Title" />  
                </div>
                <div>
                    <input type="text" name="name" value={writeState.name} onChange={handleWriteState} required placeholder="Name" />  
                </div>
                <div>
                    <textarea name="content" value={writeState.content} onChange={handleWriteState} placeholder="Content" required />
                </div>
                <button className="uploadButton" type="submit">Upload</button>
            </form>
        </div>
    )
}
export default DairyWrite