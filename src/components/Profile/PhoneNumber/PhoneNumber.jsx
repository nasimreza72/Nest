import React, { useState, useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import { loginContext } from '../../../Context/LoginContext';
import "./PhoneNumber.scss"
import PhoneInput from 'react-phone-number-input'
//import 'react-phone-number-input/style.css'


export default function PhoneNumber() {
  const { phoneNumber, setPhoneNumber } = useContext(profileContext)
  const { activeUser, setActiveUser } = useContext(loginContext)
  const [ value, setValue ] = useState("")
  const clickHandler = (e) => {


    const temporaryUser = {...activeUser}
    temporaryUser.phoneNumbers = value 

    const payload = {
      phoneNumbers:value
    }
   
    const url = ` ${process.env.REACT_APP_URL}/api/user/` + activeUser._id
          const config ={
              method: 'PATCH',
              headers: {
                  'Content-Type':'application/json',
                  'Authorization': 'bearer ' + activeUser.token
              },
              body: JSON.stringify(payload)
          }
          fetch(url, config)
              .then(response => response.json())
              .then(data => setActiveUser(temporaryUser))
          
          setPhoneNumber(false)

  }
  

  return(
    
    <div className="PhoneNumber">
      <div className="modalBodey" >
          <div className="topContaine">
            <div className="topElements">
              <h5>Phone number</h5>
              <button onClick={ e => setPhoneNumber(false)}>Cancel</button>
            </div>
            <p>Add a your phone code number </p>
          </div>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              defaultCountry="DE"
              />
            <p id="paragraph">We’ll send you a code to verify your number. Standard message and data rates apply.</p>
          <button className="buttonPhoneNumber" onClick={clickHandler}>Save</button>
      </div>
    </div>
  )

}