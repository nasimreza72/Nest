import "./Login.scss"
import { Input, FacebookButton, GoogleButton, AppleButton, EmailButton } from "../../components/Login/"

export default function Login(){

    return(
        <div className="Login">
            <div className="xAndLogIn">
                <div id="X">X</div>
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