import React, { Component } from 'react';


function TextError(props) {
    return ( 
        <div className="error">
            {props.children}
        </div>
     );
}

export default TextError;