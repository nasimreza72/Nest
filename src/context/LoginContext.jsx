import React, { useState } from 'react'


export const loginContext = React.createContext()

export default function LoginContextProvider(props){
    
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const [token, setToken] = useState("")
    const loginVariable = { token, setToken, login, setLogin, register, setRegister }

    return(
        <loginContext.Provider value={loginVariable}>
            {props.children}
        </loginContext.Provider>
    )
}