import React, { useState, useContext, useEffect } from 'react'
import { loginContext } from '../../../Context/LoginContext'
import "./HostOrUser.scss"


export default function HostOrUser(){
    
    const { hostOrUser, setHostOrUser } = useContext(loginContext)

    console.log(hostOrUser)
     
    return(
        
        <select className="HostOrUser" 
            value={hostOrUser} 
            onChange={e => setHostOrUser(e.target.value)}
        >
            <option id="placeholder" value="" disabled selected  >Host or User?</option>
            <option value="host">Host</option>
            <option value="user">User</option>
       
        </select>   
    )
}