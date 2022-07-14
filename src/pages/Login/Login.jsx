import "./Login.scss"
import { Input, FacebookButton, GoogleButton, AppleButton, EmailButton } from "../../components/Login/"
import { loginContext } from "../../Context/LoginContext.jsx"
import { useContext, useRef, useEffect} from "react";


export default function Login(){

    const { setLoginModal, submitLoginDetails, setSubmitLoginDetails, login } = useContext(loginContext)

    // Disable Modal by clicking outside............
    let menuRef = useRef()

    useEffect(() => {
        const closeModal=(e) => {
            const loginElement = document.querySelector(".Login")
            if(!loginElement.contains(e.target)) setLoginModal(false)
            
        }
        document.addEventListener("mousedown", closeModal)
        return ()=>{
            document.removeEventListener("mousedown",closeModal);
        }
    }, [])

    //////////////////////////////////////////////////////

    const submitHandler = async (e) => {
        const submit = await setSubmitLoginDetails(!submitLoginDetails)
        setLoginModal(false)
    }

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


            <button className="ContinueButton" type="submit" onClick={e =>{ setLoginModal(false); login(); }}>Continue</button>
            
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