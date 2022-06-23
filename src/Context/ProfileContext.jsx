import React, { useState } from 'react'

export const profileContext = React.createContext()


export default function ProfileContextProvider(props){

    const [legalName, setLegalName] = useState(true)
    const [gender, setGender] =useState(false)
    const profileVariable = { legalName, setLegalName, gender, setGender }
    
    return(
        <profileContext.Provider value={profileVariable}>
            {props.children}
        </profileContext.Provider>
    )


}
