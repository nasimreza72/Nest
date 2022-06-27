import React, { useState, useContext, useEffect } from 'react'
import "./LoginComponent.scss"
import axios from "axios"
import { loginContext } from "../../Context/LoginContext.jsx"



export default function Input(){
    const { submitLoginDetails } = useContext(loginContext)
    const [ userName, setUserName ] = useState("")
    const [ password, setPassword ] = useState("")
    //const { token, setToken } = useContext(tokenContext)
    //const tokenLokal = localStorage.getItem('token')
    console.log("input ---------" + userName, password)

    useEffect(() => {
        console.log("axios")
        axios.post('http://localhost:7777/api/user/login', {
            
                username: 'userName',
                password: 'password'
              
          })
          .then(function (response) {
            console.log("resüonse-------" + response);
          })
          .catch(function (error) {
            console.log(error);
          });

    },[submitLoginDetails])
    

    return(
        <form >
            <input className="topInput" type="text" value={userName} onChange={ e => setUserName(e.target.value) } placeholder="username" />
            <input className="bottomInput" type="password" value={password} onChange={ e => setPassword(e.target.value) } placeholder="password" />

        </form> 
    )


}