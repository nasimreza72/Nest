import "./Login.scss"
import { Input, FacebookButton, GoogleButton, AppleButton, EmailButton } from "../../components/Login/"
import { loginContext } from "../../Context/LoginContext.jsx"
import { useContext, useState, useRef, useEffect} from "react";


export default function Login(){

    const { loginModal, setLoginModal, submitLoginDetails, setSubmitLoginDetails } = useContext(loginContext)

    console.log("subm it thingi" + submitLoginDetails)

    // Disable Modal by clicking outside............
    let menuRef = useRef()

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if(!menuRef.current.contains(e.target))
            setLoginModal(false)
        })
    }, [loginModal])
    //////////////////////////////////////////////////////

    return(
        <div className="Login" ref={menuRef} >
            <div className="xAndLogIn">
                <div id="X" onClick={ e => setLoginModal(false) }>X</div>
                <div>Login</div>
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

            <button className="ContinueButton" type="submit" onClick={e => setSubmitLoginDetails(true)}>Continue</button>
            
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