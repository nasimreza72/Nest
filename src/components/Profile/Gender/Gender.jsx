import "./Gender.scss"
import React, { useState, useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import { loginContext } from '../../../Context/LoginContext';


export default function Gender() {
  const { gender, setGender } = useContext(profileContext)
  const { activeUser, setActiveUser } = useContext(loginContext)
  const [whichGender, setWhichGender] = useState("")

  
  const clickHandler = (e) => {
   

    const payload = {
      gender: whichGender
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
              .then(data => console.log(data))
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
                 placeholder="Gender" 
                 value={whichGender} 
                 onChange={e => setWhichGender(e.target.value)}
                 defaultValue= "Choose a gender"
          >
           <option value="He">He</option>
           <option value="She">She</option>
           <option value="Other">Other</option>
         </select>
          <button className="buttonGender" onClick={clickHandler}>Save</button>
      </div>
    </div>
  )

}

