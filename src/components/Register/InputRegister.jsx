import React, { useState, useContext, useEffect } from 'react'
import axios from "axios"
import { loginContext } from "../../Context/LoginContext.jsx"
import { tokenContext } from '../../Context/TokenContext'

// "email":"ponni@hof",
// "password":"123RonRon!!!"

export default function InputRegister(){
    const { email, setEmail, password, setPassword } = useContext(loginContext)
    // const [ email, setEmail ] = useState("")
    // const [ password, setPassword ] = useState("")
    

    

     
    return(
        <form >
            <input className="topInput" type="text" value={email} onChange={ e => setEmail(e.target.value) } placeholder="E-Mail" />
            <input className="bottomInput" type="password" value={password} onChange={ e => setPassword(e.target.value) } placeholder="password" />

        </form> 
    )


}