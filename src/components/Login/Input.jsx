import React, { useState, useContext, useEffect } from 'react'
import "./LoginComponent.scss"



export default function Input(){

    const [ userName, setUserName ] = useState("")
    const [ password, setPassword ] = useState("")
    //const { token, setToken } = useContext(tokenContext)
    //const tokenLokal = localStorage.getItem('token')

    const submitHandler = (e) => {
        e.preventDefault()

        // const url = 'http://localhost:5000/login'

        // const payload = {
        //     username: userName,
        //     password: password
        // }
        // const config = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(payload)
        }

    return(
        <form onSubmit={submitHandler}>
            <input className="topInput" type="text" value={userName} onChange={ e => setUserName(e.target.value) } placeholder="username" />
            <input className="bottomInput" type="password" value={password} onChange={ e => setPassword(e.target.value) } placeholder="password" />
        </form> 
    )


}