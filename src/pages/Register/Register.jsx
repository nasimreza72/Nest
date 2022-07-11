import "./Register.scss"
import { FacebookButton, GoogleButton, AppleButton, EmailButton } from "../../components/Login/"
import InputRegister from "../../components/Register/InputRegister.jsx"
import HostOrUser from "../../components/Register/HostOrUser/HostOrUser.jsx" 
import { loginContext } from "../../Context/LoginContext.jsx"
import { useContext, useState, useRef, useEffect } from "react";


export default function Register(){

    // Disable Modal by clicking outside............
    const { register, setRegister, registerFunction, hostOrUser } = useContext(loginContext)

    let menuRef = useRef()

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if(!menuRef?.current?.contains(e.target))
            setRegister(false)
        })
    })
    ////////////////////////////////////////////////////


    return(
        <div className="Register" ref={menuRef}>
            <div className="xAndLogIn">
                <div onClick={ e => setRegister(!register) } id="X">X</div>
                <div>Register</div>
            </div>

            <div className="WelcomeToNest">Welcome to NEST</div>
            
            <div className="selectHostAndUser"> 
                <HostOrUser />
            </div>
            
            <div className="userNameAndPassword">
                <InputRegister />
            </div>
            
            <div className="buttonFacebook">
                <FacebookButton />
            </div>

            <div className="buttonGoogle">
                <GoogleButton />
            </div>

            <div className="buttonApple">
                <AppleButton />
            </div>
            
            <div className="buttonEmail">
                <EmailButton />
            </div>
        </div>
    )

}