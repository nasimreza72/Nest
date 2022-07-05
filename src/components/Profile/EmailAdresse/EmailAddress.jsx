import React, { useState, useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import { loginContext } from '../../../Context/LoginContext';

import "./EmailAddress.scss"



export default function EmailAddresse() {
  const { emailAddresse, setEmailAdresse } = useContext(profileContext)
  const { activeUser, setActiveUser } = useContext(loginContext)
  const [email, setEmail] = useState("")

  const temporaryUser = {...activeUser}
  temporaryUser.email = email
   

  console.log('activeUser Email.jsx :>> ', activeUser);

  const clickHandler = (e) => {

    const payload = {
      "loginInfo.email": email
    }
    
    const url = `${process.env.REACT_APP_URL}/api/user/` + activeUser._id
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
              .then(data => setActiveUser(temporaryUser))
          setEmailAdresse(false)
  }
  

  return(
    
    <div className="EmailAddresse">
      <div className="modalBodey">
          <div className="topContaine">
            <div className="topElements">
              <h5>Email address</h5>
              <button onClick={ e => setEmailAdresse(false)}>Cancel</button>
            </div>
            <p>Use an address you’ll always have access to</p>
          </div>
          <form action="" className="formEmail">
              <input type="text" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)}/>
          </form>
         
          <button className="buttonEmail" onClick={clickHandler}>Save</button>
      </div>
    </div>
  )

}