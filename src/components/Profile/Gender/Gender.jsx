import "./Gender.scss"
import React, { useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';

export default function Gender() {
  const { gender, setGender } = useContext(profileContext)
  let menuRef = useRef()


  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
        if(!menuRef.current.contains(e.target))
        setGender(false)
        console.log("insid gender useeffcet---------------------")
    })
}, [gender])
  
  
  return(
    
    <div className="Gender">
      <div className="modalBodey" ref={menuRef}>
          <div className="topContaine">
            <div className="topElements">
              <h5>Gender</h5>
              <button onClick={ e => setGender(false)}>Cancel</button>
            </div>
          </div>
         <select className="selectGender" id="" placeholder="Gender">
           <option value="Choose Gender" disabled selected>Choose gender</option>
           <option value="He">He</option>
           <option value="She">She</option>
           <option value="Other">Other</option>
         </select>
          <button className="buttonGender">Save</button>
      </div>
    </div>
  )

}

