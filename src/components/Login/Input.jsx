import React, { useContext } from 'react'
import "./LoginComponent.scss"
import { loginContext } from "../../Context/LoginContext.jsx"
// import { tokenContext } from '../../Context/TokenContext'

// "email":"ponni@hof",
// "password":"123RonRon!!!"

export default function Input(){
    const {setEmail, setPassword, email, password } = useContext(loginContext)


    return(
        <form >
            <input className="topInput" type="text" value={email} onChange={ e => setEmail(e.target.value) } placeholder="E-Mail" />
            <input className="bottomInput" type="password" value={password} onChange={ e => setPassword(e.target.value) } placeholder="password" />

        </form> 
    )


}