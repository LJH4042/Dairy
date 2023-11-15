import React, { useState } from "react";
import "../css/Register.css"
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Register(){
    const [state, setState] = useState({
        nameValue: "",
        idValue: "",
        passwordValue: "",
        passwordValue2: ""
    })

    const handleRegisterState = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const navigate = useNavigate()
    const goToLogin = () => {navigate("/Login")}

    const handleRegisterSubmit = (event) => {
        event.preventDefault()
        if(state.passwordValue !== state.passwordValue2){
            alert("비밀번호가 일치하지 않습니다.")
        }else{
            alert("회원가입 되었습니다.")
            goToLogin()
        }

        /*fetch("http://localhost:3000/Register", {
            method: "POST",
            body: JSON.stringify({
                name: state.nameValue,
                id: state.idValue,
                password: state.passwordValue
            })
        }).then(response => response.json()) //server에서 보내준 response를 object 형태로 변환
        .then(result => {
            if(state.passwordValue !== state.passwordValue2){
                alert("비밀번호가 일치하지 않습니다.")
            }else{
                alert("회원가입 되었습니다.")
                goToLogin()
                console.log('결과: ', result) //object로 변환한 response를 console.log에 출력
            }
        })*/
    }

    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="registerForm">
                <form onSubmit={handleRegisterSubmit}>
                    <h1>Register</h1>
                    <hr />
                    <p>make your account</p>
                    <div>
                        <input type="text" name="nameValue" value={state.nameValue} onChange={handleRegisterState} required placeholder="Name" />
                    </div>
                    <div>
                        <input type="text" name="idValue" value={state.idValue} onChange={handleRegisterState} required placeholder="ID" />
                    </div>
                    <div>
                        <input type="password" name="passwordValue" value={state.passwordValue} onChange={handleRegisterState} required placeholder="PASSWORD" />
                    </div>
                    <div>
                        <input type="password" name="passwordValue2" value={state.passwordValue2} onChange={handleRegisterState} required placeholder="PASSWORD AGAIN" />
                    </div>
                    <button type="submit">Register</button>
                    <hr />
                    <p>have an account?</p>
                    <a onClick={goToLogin}>-Login-</a>
                </form>
            </div>
        </div>
    )
}
export default Register