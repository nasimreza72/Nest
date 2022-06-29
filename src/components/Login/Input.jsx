import React, { useState, useContext, useEffect } from 'react'
import "./LoginComponent.scss"
import axios from "axios"
import { loginContext } from "../../Context/LoginContext.jsx"
import { tokenContext } from '../../Context/TokenContext'

// "email":"ponni@hof",
// "password":"123RonRon!!!"

export default function Input(){
    const { submitLoginDetails } = useContext(loginContext)
    const { token, setToken } = useContext(tokenContext)
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    
    console.log("this is token" + token)

    useEffect(() => {
        console.log("axios")

        axios.post('http://localhost:7777/api/user/login', {
          
          email: email,
          password: password

        })
        .then(function (response) {
            setToken(response.data.token)
            //navigate("/account")  
    })
    .catch(error => console.log(error)) 
    },[submitLoginDetails])

    useEffect(() => {
      if(token) {
          console.log("lokalöstorage" + token)
          localStorage.setItem('token', token)
      } else {
          localStorage.removeItem('token') /// what does this do???
          
      }


  }, [token])



    return(
        <form >
            <input className="topInput" type="text" value={email} onChange={ e => setEmail(e.target.value) } placeholder="E-Mail" />
            <input className="bottomInput" type="password" value={password} onChange={ e => setPassword(e.target.value) } placeholder="password" />

        </form> 
    )


}