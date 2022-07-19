import { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from "axios"

export const loginContext = createContext()

const activeUserFromLocalStorage = JSON.parse(localStorage.getItem("activeUser"));

export default function LoginContextProvider(props){
    
    const [loginModal, setLoginModal] = useState(false)
    const [register, setRegister] = useState(false)
    const [submitLoginDetails, setSubmitLoginDetails] = useState(false)
    const [submitRegistrationDetails, setSubmitRegistrationDetails] = useState(false)

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ hostOrUser, setHostOrUser ] = useState("")
    const [ activeUser, setActiveUser ] = useState(activeUserFromLocalStorage);

    console.log("inside context", email, password)

    const login=()=>{
        
        axios.post(`${process.env.REACT_APP_URL}/api/user/login`, {
          email: email,
          password: password
        })
        .then(function (response) {

        // if there is an error it goes to catch, that's why we can write the alert to the catch block
        // Instead of alert we should add an error message
        // Instead of loginContext and TokenContext can we use one userContext?
          
        setActiveUser(response.data)
        //navigate("/account")
        
    })
    .catch(error => console.log(error))
    }


    // Trigger the Register Fetch to Backend .............
    /* useEffect(() => {
        if(email && password && hostOrUser){
            registerFunction()
        }
        return
    }, [email, password, hostOrUser]) */
    //////////////////////////////////////////////////////////

    const navigate = useNavigate()

    const registerFunction = (values)=>{
        console.log("values", values);
        
        axios.post(`${process.env.REACT_APP_URL}/api/user/register`, {
            loginInfo: 
            {
                email:values.email,
                password:values.password
            },
            role: values.selectOption,
            conversation:[],
            // address:{
            //     street:"",
            //     houseNumber:null,
            //     zip:null,
            //     city:"",
            //     country:"",
            // }
        })
        .then(function (response) {
            console.log(response)
            navigate("/hostaccount")
            setActiveUser(response.data)
        })
        .catch(error => console.log(error)) 
    }


    const getUser = ()=>{
        const headers={
            Authorization:`Bearer ${activeUser.token}`
        }
        axios.get(`${process.env.REACT_APP_URL}/api/user/${activeUser._id}`, {headers})
        .then(res=>{
            console.log('res.data :>> ', res.data)
            setActiveUser({...res.data, token:activeUser.token})
        })
        .catch(err=>console.log('err :>> ', err))
    }

    const loginVariable = { loginModal, setLoginModal, register, setRegister,submitLoginDetails, setSubmitLoginDetails,registerFunction,
                            submitRegistrationDetails, setSubmitRegistrationDetails, activeUser, setActiveUser, login, setEmail, 
                            setPassword, email, password,
                            getUser, hostOrUser, setHostOrUser
                          }



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