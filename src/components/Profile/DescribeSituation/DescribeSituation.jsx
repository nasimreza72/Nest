import React, { useState, useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import { loginContext } from '../../../Context/LoginContext';
import "./DescribeSituation.scss"


export default function DescribeSituation() {
  const { describeSituationModal, setDescribeSituationModal } = useContext(profileContext)
  const { activeUser, setActiveUser } = useContext(loginContext)
  const [inputTextArea, setInputTextArea] = useState("")

  console.log(inputTextArea)
  
  const clickHandler = (e) => {

    const temporaryUser = {...activeUser}
    temporaryUser.describeSituation = inputTextArea
    
    const payload = {
        describeSituation:inputTextArea
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
              .then(data => setActiveUser(temporaryUser))

          setDescribeSituationModal(false)
  }


  return(
    
    <div className="DescribeSituation">
      <div className="modalBodey" >
          <div className="topContaine">
            <div className="topElements">
              <h5>My current situation as a refugee</h5>
              <button onClick={ e => setDescribeSituationModal(false)}>Cancel</button>
            </div>
            <p> 
                Help us understand your situation better
            </p>
          </div>
            <textarea  
                rows="8" 
                cols="50"
                className="textAreaInterests" 
                value={inputTextArea}
                onChange={e => setInputTextArea(e.target.value)}
            />
            <button className="buttonDescribeSituation" onClick={clickHandler}>Save</button>
      </div>
    </div>
  )

}