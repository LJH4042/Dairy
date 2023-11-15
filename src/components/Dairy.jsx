import React, { useState } from "react";
import "../css/Dairy.css"

function Dairy({id, title, date, name, content, deleteDairy, editDairy}){
    const [editContent, setEditContent] = useState(content)
    const handleEditContent = (event) => setEditContent(event.target.value)
    const [editBoolen, setEditBoolen] = useState(false)
    const clickEditBoolen = (event) => {
        setEditBoolen((editBoolen) => !editBoolen)
    }
    const handleEdit = () => {
        editDairy(id, editContent)
        setEditBoolen((editBoolen) => !editBoolen)
        alert("수정 되었습니다.")
    }

    const handleDelete = () => {
        deleteDairy(id)
        alert("삭제 되었습니다.")
    }

    return(
        <div>
            <div className="container">
                <div key={id} className="topContainer">
                    <h1>{title}</h1>
                    <div>
                        <p>날짜: {date}  /  작성자: {name}</p>
                    </div>
                </div>
                <div>
                    {editBoolen ? 
                        <textarea className="editTextArea" value={editContent} onChange={handleEditContent} placeholder="Content" required /> :
                        <p>{content}</p>}
                </div>
            </div>
            <div className="buttonContainer">
                {editBoolen ? null : <button className="dairyButton" onClick={clickEditBoolen}>수정하기</button> }
                {editBoolen ? null : <button className="dairyButton" onClick={handleDelete}>삭제하기</button> }
                {editBoolen ? <button className="dairyButton" onClick={handleEdit}>수정완료</button> : null }
                {editBoolen ? <button className="dairyButton" onClick={handleDelete}>삭제하기</button> : null}
            </div>
        </div>
    )
}
export default Dairy