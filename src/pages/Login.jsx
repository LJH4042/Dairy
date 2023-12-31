import React, { useState, useEffect } from "react";
import "../css/Login.css"
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { createAxios } from "../api/axiosInstance";

function Login(){
    const [userState, setUserState] = useState({
        idValue: "",
        passwordValue: ""
    })

    const handleLoginState = (event) => {
        setUserState({
            ...userState, 
            [event.target.name]: event.target.value 
        })
    }

    const navigate = useNavigate()
    const goToRegister = () => {navigate("/Register")}
    const goToMyPage = () => {navigate("/MyPage")}

    const handleLoginSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await createAxios.post("/auth/signin", {
                username: userState.idValue,
                password: userState.passwordValue
            })
            if(response.status === 200 || response.status === 201){
                alert("로그인에 성공하였습니다.")
                goToMyPage()
                localStorage.setItem('token', response.data.accessToken)
            }else{
                alert("로그인 혹은 비밀번호가 일치하지 않습니다.")
                setUserState({
                    idValue: "",
                    passwordValue: ""
                })
            }        
        }catch(error){
            console.log("오류 발생: ", error)
        }        
    }

    useEffect(() => {
        if(localStorage.getItem('token') !== null){
            window.location.replace('http://localhost:3000/MyPage')
        }
    },[])

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
                        <input type="text" name="idValue" value={userState.idValue} onChange={handleLoginState} required placeholder="ID" />
                    </div>
                    <div>
                        <input type="password" name="passwordValue" value={userState.passwordValue} onChange={handleLoginState} required placeholder="PASSWORD" />
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

/*if(realID == state.idValue){
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
        }*/

        /*fetch("http://localhost:5000/auth/signin", {
            method: 'POST',
            body: JSON.stringify({
                username: state.idValue,
                password: state.passwordValue
            }),
        }).then(response => response.json())
        .then((result) => {
            if(result.accessToken){
                localStorage.setItem('token', result.accessToken)
                alert("로그인에 성공하였습니다.")
                goToMyPage()
            }else{
                alert("로그인 혹은 비밀번호가 일치하지 않습니다.")
                setState({
                    idValue: "",
                    passwordValue: ""
                })
            }
        })*/