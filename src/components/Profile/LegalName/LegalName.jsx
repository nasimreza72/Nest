import React, { useState, useRef, useContext, useEffect } from 'react';
import "./LegalName.scss"
import { profileContext } from '../../../Context/ProfileContext';
import { loginContext } from '../../../Context/LoginContext';
import axios from "axios"

export default function LegalName() {
  const { legalName, setLegalName } = useContext(profileContext)
  const { activeUser, setActiveUser } = useContext(loginContext)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  let menuRef = useRef()


 
const submitHandler = (e) => {
  e.preventdefault()
}

const clickHandler = (e) => {
  const payload = {
    firstName: firstName,
    lastName: lastName
  }

  const url = `http://localhost:7777/api/user/` + activeUser._id
        const config ={
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'bearer ' + activeUser.password
            },
            body: JSON.stringify(payload)
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => console.log(data))
}
  
  return(
    
    <div className="LegalName">
      <div className="modalBodey" ref={menuRef}>
          <div className="topContaine">
            <div className="topElements">
              <h5>Legal name</h5>
              <button onClick={ e => setLegalName(false)}>Cancel</button>
            </div>
            <p>This is the name on your travel document, which could be a license 
               or a passport.</p>
          </div>
          <form id="form" onSubmit={submitHandler} >
            <input className="inputLegalName" type="text" placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <input className="inputLegalName" type="text" placeholder="Last name" value={lastName} onChange={e=> setLastName(e.target.value)} />
          </form>
          <button className="buttonLegalName" onClick={clickHandler} >Save</button>
      </div>
    </div>
  )

}

