import "./LoginComponent.scss"
import React from "react"
import { FcGoogle } from 'react-icons/fc';



export default function GoogleButton(){

    return(
        <div className="GoogleButton">
            <div id="GoogleIcon">
                <FcGoogle size="1.30rem" />
            </div>
            <button>Continue with Google</button>
        </div>
    )


}