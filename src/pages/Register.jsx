import React, { useState } from "react";
import "../css/Register.css"
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { createAxios } from "../api/axiosInstance";

function Register(){
    const [userState, setUserState] = useState({
        nameValue: "",
        idValue: "",
        passwordValue: "",
        passwordValue2: ""
    })

    const handleRegisterState = (event) => {
        setUserState({
            ...userState,
            [event.target.name]: event.target.value
        })
    }

    const navigate = useNavigate()
    const goToLogin = () => {navigate("/Login")}

    const handleRegisterSubmit = async (event) => {
        event.preventDefault()

        if(userState.passwordValue !== userState.passwordValue2){
            alert("비밀번호가 일치하지 않습니다.")
        }else{
            try{
                const response = await createAxios.post("/auth/signup", {
                    username: userState.idValue,
                    password: userState.passwordValue
                })
                if (response.status === 200 || response.status === 201){
                    alert("회원가입 되었습니다.")
                    goToLogin()
                }
            }catch(error){
                alert('중복 아이디입니다.')
                console.log("오류 발생: ", error)
            }
        }
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
                        <input type="text" name="nameValue" value={userState.nameValue} onChange={handleRegisterState} required placeholder="Name" />
                    </div>
                    <div>
                        <input type="text" name="idValue" value={userState.idValue} onChange={handleRegisterState} required placeholder="ID" />
                    </div>
                    <div>
                        <input type="password" name="passwordValue" value={userState.passwordValue} onChange={handleRegisterState} required placeholder="PASSWORD" />
                    </div>
                    <div>
                        <input type="password" name="passwordValue2" value={userState.passwordValue2} onChange={handleRegisterState} required placeholder="PASSWORD AGAIN" />
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

/*if(state.passwordValue !== state.passwordValue2){
            alert("비밀번호가 일치하지 않습니다.")
        }else{
            const payload = {
                name: state.nameValue,
                username: state.idValue,
                password: state.passwordValue
            }
            try{
                const response = await fetch("/auth/signup", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(payload),
                    credential: 'include'
                })
                if (response.status === 201){
                    alert("회원가입 되었습니다.")
                    goToLogin()
                }else{
                    alert("회원가입에 실패하셨습니다.")
                }
            }catch(error){
                console.log("오류 발생: ", error)
            }
        }*/
        
        /*if(state.passwordValue !== state.passwordValue2){
            alert("비밀번호가 일치하지 않습니다.")
        }else{
            alert("회원가입 되었습니다.")
            goToLogin()
        }*/

        /*if(state.passwordValue !== state.passwordValue2){
            alert("비밀번호가 일치하지 않습니다.")
        }else{
            fetch("http://localhost:5000/auth/signup", {
                method: "POST",
                body: JSON.stringify({
                    name: state.nameValue,
                    username: state.idValue,
                    password: state.passwordValue
                })
            }).then(response => response.json())
            .then((result) => {
                alert("회원가입 되었습니다.")
                goToLogin()
            })
        }*/