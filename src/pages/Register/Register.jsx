import "./Register.scss"
import { Input, FacebookButton, GoogleButton, AppleButton, EmailButton } from "../../components/Login/"
import { loginContext } from "../../Context/LoginContext.jsx"
import { useContext, useState, useRef, useEffect } from "react";


export default function Register(){

    // Disable Modal by clicking outside............
    const { register, setRegister } = useContext(loginContext)
    let menuRef = useRef()

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if(!menuRef.current.contains(e.target))
            setRegister(false)
        })
    }, [register])
    ////////////////////////////////////////////////////


    return(
        <div className="Register" ref={menuRef}>
            <div className="xAndLogIn">
                <div onClick={ e => setRegister(!register) } id="X">X</div>
                <div>Register</div>
            </div>

            <div className="WelcomeToNest">Welcome to NEST</div>

            <div className="userNameAndPassword">
                <Input />
            </div>
            
            <div className="privacyPolicy">
                <p> We`ll call or text you to confirm your number. 
                    Standard message and data rates apply. 
                    <a href=""> Privacy Policy</a> 
                </p>
            </div>

            <button className="ContinueButton" type="submit">Continue</button>
            
            <div className="leftLine"></div> 
            <div className="or">or</div> 
            <div className="rightLine"></div>

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