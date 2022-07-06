import React, { useState, useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import { loginContext } from '../../../Context/LoginContext';
import "./WhyHost.scss"


export default function WhyHost() {
  const { whyHostModal, setWhyHostModal } = useContext(profileContext)
  const { activeUser, setActiveUser } = useContext(loginContext)
  const [inputTextArea, setInputTextArea] = useState("")

  console.log(inputTextArea)
  
  const clickHandler = (e) => {

    const temporaryUser = {...activeUser}
    temporaryUser.reasonForHosting = inputTextArea
    
    const payload = {
        reasonForHosting:inputTextArea
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

          setWhyHostModal(false)
  }


  return(
    
    <div className="WhyHost">
      <div className="modalBodey" >
          <div className="topContaine">
            <div className="topElements">
              <h5>Personal reassons for hosting</h5>
              <button onClick={ e => setWhyHostModal(false)}>Cancel</button>
            </div>
            <p> 
                Tell us why you want to help refugees by offering them housing
            </p>
          </div>
            <textarea  
                rows="8" 
                cols="50"
                className="textAreaInterests" 
                value={inputTextArea}
                onChange={e => setInputTextArea(e.target.value)}
            />
            <button className="buttonWhyHosting" onClick={clickHandler}>Save</button>
      </div>
    </div>
  )

}