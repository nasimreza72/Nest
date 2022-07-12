import React, { Component } from 'react';
import "./HostOrUser.scss"


function TextError(props) {
    return ( 
        <div id="errorStyle">
            {props.children}
        </div>
     );
}

export default TextError;