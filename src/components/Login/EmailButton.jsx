import "./LoginComponent.scss"
import React from "react";
import { AiOutlineMail } from 'react-icons/ai';



export default function EmailButton(){

    return(
        <div className="EmailButton">
            <div id="EmailIcon">
                < AiOutlineMail size="1.3rem" />
            </div>
            <button>Continue with Email</button>
        </div>
    )


}