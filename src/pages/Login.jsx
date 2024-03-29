import React from "react";
import KakaoLoginButton from "../components/KakaoLoginButton";
import NaverLoginButton from "../components/NaverLoginButton";



export default function Login() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        return (
            <div>이미 로그인 한 상태입니다!</div>
        )
    }

    return(
    <div style={{textAlign:"center", height: "450px"}}>

        <div className="login" style={{marginTop: "100px"}}>
            <p style={{fontSize: "36px"}}>로그인</p><br /><br />
            <p style={{fontSize: "18px"}}>간편 로그인으로 바로 시작해 보세요!</p><br />
        
        </div>
        <NaverLoginButton /><br/><br/>
        <KakaoLoginButton />

    </div>
    )
}
