import "./Gender.scss"
import React, { useState, useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import { loginContext } from '../../../Context/LoginContext';


export default function Gender() {
  const { gender, setGender } = useContext(profileContext)
  const { activeUser, setActiveUser } = useContext(loginContext)
  const [whichGender, setWhichGender] = useState("")

  
  const clickHandler = (e) => {
   
    const temporaryUser = {...activeUser}
    temporaryUser.gender = whichGender

    const payload = {
      gender: whichGender
    }
    
    const url = `${process.env.REACT_APP_URL}/api/user/` + activeUser._id
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
              .then(data => {setActiveUser(temporaryUser)})
              setGender(false)
  }

  

  return(
    
    <div className="Gender">
      <div className="modalBodey" >
          <div className="topContaine">
            <div className="topElements">
              <h5>Gender</h5>
              <button onClick={ e => setGender(false)}>Cancel</button>
            </div>
          </div>
         <select className="selectGender" 
                 value={whichGender} 
                 onChange={e => setWhichGender(e.target.value)}
                 defaultValue= "Choose"
          >
          <option  value="Choose">Choose</option>
           <option value="He" >He</option>
           <option value="She">She</option>
           <option value="Other">Other</option>
         </select>
          <button className="buttonGender" onClick={clickHandler}>Save</button>
      </div>
    </div>
  )

}

