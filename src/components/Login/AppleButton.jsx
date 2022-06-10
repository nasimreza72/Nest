import "./LoginComponent.scss"
import React from "react"
import { BsApple } from 'react-icons/bs';



export default function AppleButton(){

    return(
        <div className="AppleButton">
            <div id="AppleIcon">
                <BsApple size="1.30rem" />
            </div>
            <button>Continue with Apple</button>
        </div>
    )


}