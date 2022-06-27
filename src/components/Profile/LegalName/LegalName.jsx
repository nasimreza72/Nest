import React, { useState, useRef, useContext, useEffect } from 'react';
import "./LegalName.scss"
import { profileContext } from '../../../Context/ProfileContext';

export default function LegalName() {
  const { legalName, setLegalName } = useContext(profileContext)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  console.log(lastName)
  let menuRef = useRef()


  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
        if(!menuRef.current.contains(e.target))
        setLegalName(false)
        console.log("insid useEffect")
    })
}, [legalName])


const legalNameHandler = (e) => {

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
          <form id="form">
            <input className="inputLegalName" type="text" placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <input className="inputLegalName" type="text" placeholder="Last name" value={lastName} onChange={e=> setLastName(e.target.value)} />
          </form>
          <button className="buttonLegalName" onClick={legalNameHandler}>Save</button>
      </div>
    </div>
  )

}

