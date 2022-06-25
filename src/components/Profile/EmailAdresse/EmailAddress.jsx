import React, { useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import "./EmailAddress.scss"



export default function EmailAddresse() {
  const { emailAddresse, setEmailAdresse } = useContext(profileContext)
  let menuRef = useRef()


  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
        if(!menuRef.current.contains(e.target))
        setEmailAdresse(false)
    })
}, [emailAddresse])
  
  
  return(
    
    <div className="EmailAddresse">
      <div className="modalBodey" ref={menuRef}>
          <div className="topContaine">
            <div className="topElements">
              <h5>Email address</h5>
              <button onClick={ e => setEmailAdresse(false)}>Cancel</button>
            </div>
            <p>Use an address you’ll always have access to</p>
          </div>
          <form action="" className="formEmail">
              <input type="text" placeholder="Email Address" />
          </form>
         
          <button className="buttonEmail">Save</button>
      </div>
    </div>
  )

}