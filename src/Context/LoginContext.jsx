import React, { useState } from 'react'


export const loginContext = React.createContext()

export default function LoginContextProvider(props){
    
    const [login, setLogin] = useState(false)
    const loginVariable = { login, setLogin }

    return(
        <loginContext.Provider value={loginVariable}>
            {props.children}
        </loginContext.Provider>
    )

}