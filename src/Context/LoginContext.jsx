import React, { useState } from 'react'


export const loginContext = React.createContext()

export default function LoginContextProvider(props){
    
    const [loginModal, setLoginModal] = useState(false)
    const [register, setRegister] = useState(false)
    const loginVariable = { loginModal, setLoginModal, register, setRegister }

    return(
        <loginContext.Provider value={loginVariable}>
            {props.children}
        </loginContext.Provider>
    )
}