import "./LoginComponent.scss";
import React from "react";
import { BsFacebook } from 'react-icons/bs';


export default function FacebookButton(){

    return(
        <div className="FacebookButton">
            <div id="FaIcon">
                <BsFacebook size="1.30rem" color="#4267B2" />
            </div>
            <button>Continue with Facebook</button>
        </div>
    )


}