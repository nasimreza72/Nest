import { useState, useEffect, createContext } from 'react'
import axios from "axios"

export const loginContext = createContext()

const activeUserFromLocalStorage = JSON.parse(localStorage.getItem("activeUser"));

export default function LoginContextProvider(props){
    
    const [loginModal, setLoginModal] = useState(false)
    const [register, setRegister] = useState(false)
    const [submitLoginDetails, setSubmitLoginDetails] = useState(false)

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [activeUser, setActiveUser] = useState(activeUserFromLocalStorage);

    const login=()=>{
        axios.post('http://localhost:7777/api/user/login', {
          email: email,
          password: password
        })
        .then(function (response) {

        // if there is an error it goes to catch, that's why we can write the alert to the catch block
        // Instead of alert we should add an error message
        // Can we take this function to the Login Context
        // Instead of loginContext and TokenContext can we use one userContext?
          
        // setToken(response.data.token)
        setActiveUser(response.data)
        console.log('response.data :>> ', response.data);
        //navigate("/account")
        
    })
    .catch(error => console.log(error))
    }

    console.log('activeUser Logincontext :>> ', activeUser);
    const loginVariable = { loginModal, setLoginModal, register, setRegister,submitLoginDetails, setSubmitLoginDetails,
        activeUser, setActiveUser, login, setEmail, setPassword, email, password }


        useEffect(() => {
            console.log('activeUser Input UseEffect :>> ', activeUser);
          if(activeUser) {
              console.log("ActiveUser saved to the localstorage");
              localStorage.setItem('activeUser', JSON.stringify(activeUser))
          } else {
              console.log('activeUser removed from the localstorage:>> ');
              localStorage.removeItem('activeUser') /// what does this do???
          }
      }, [activeUser])

    return(
        <loginContext.Provider value={loginVariable}>
            {props.children}
        </loginContext.Provider>
    )
}