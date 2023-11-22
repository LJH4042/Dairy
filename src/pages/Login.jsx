import React, { useState } from "react";
import "../css/Login.css"
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Login(){
    const [state, setState] = useState({
        idValue: "",
        passwordValue: ""
    })

    const handleLoginState = (event) => {
        setState({
            ...state, //loginState 객체를 나열 ([loginID, loginPWD]로 나열)
            [event.target.name]: event.target.value //객체 이름을 찾아 그 값을 지정
        })
    }

    const navigate = useNavigate()
    const goToRegister = () => {navigate("/Register")}
    const goToMyPage = () => {navigate("/MyPage")}

    const realID = "jungbu" //더미 ID
    const realPW = "1234" //더미 패스워드

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        if(realID == state.idValue){
            if(realPW == state.passwordValue){
                alert("로그인에 성공하였습니다.")
                goToMyPage()
            }else{
                alert("로그인 혹은 비밀번호가 일치하지 않습니다.")
                setState({
                    idValue: "",
                    passwordValue: ""
                })
            }
        }else{
            alert("로그인 혹은 비밀번호가 일치하지 않습니다.")
            setState({
                idValue: "",
                passwordValue: ""
            })
        }

        /*fetch("http://localhost:5000/Login", {
            method: 'POST',
            body: JSON.stringify({
                id: state.idValue,
                password: state.passwordValue
            }),
        }).then(response => response.json())
        .then(response => {
            if(response.token){
                alert("로그인에 성공하였습니다.")
                goToMyPage()
            }else{
                alert("로그인 혹은 비밀번호가 일치하지 않습니다.")
                setLoginState({
                    idValue: "",
                    passwordValue: ""
                })
            }
        })*/
    }

    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="loginForm">
                <form onSubmit={handleLoginSubmit}>
                    <h1>Login</h1>
                    <hr />
                    <p>use your account</p>
                    <div>
                        <input type="text" name="idValue" value={state.idValue} onChange={handleLoginState} required placeholder="ID" />
                    </div>
                    <div>
                        <input type="password" name="passwordValue" value={state.passwordValue} onChange={handleLoginState} required placeholder="PASSWORD" />
                    </div>
                    <button type="submit">Login</button>
                    <hr />
                    <p>don't have an account?</p>
                    <a onClick={goToRegister}>-Register-</a>
                </form>
            </div>
        </div>
    )
}
export default Login