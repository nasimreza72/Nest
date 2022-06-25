import React, { useState } from 'react'

export const profileContext = React.createContext()


export default function ProfileContextProvider(props){

    const [legalName, setLegalName] = useState(false)
    const [gender, setGender] = useState(false)
    const [dateOfBirth, setDateOfBirth] = useState(false)
    const [emailAddresse, setEmailAdresse] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState(false)
    const [address, setAddress] = useState(false)
    
    const profileVariable = { legalName, setLegalName, gender, setGender,
                              dateOfBirth, setDateOfBirth,
                              emailAddresse, setEmailAdresse,
                              phoneNumber, setPhoneNumber,
                              address, setAddress }
    
    return(
        <profileContext.Provider value={profileVariable}>
            {props.children}
        </profileContext.Provider>
    )


}
