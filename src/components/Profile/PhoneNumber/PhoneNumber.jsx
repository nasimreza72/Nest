import React, { useState, useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import "./PhoneNumber.scss"
import PhoneInput from 'react-phone-number-input'
//import 'react-phone-number-input/style.css'


export default function PhoneNumber() {
  const { phoneNumber, setPhoneNumber } = useContext(profileContext)
  const [value, setValue] = useState()
  let menuRef = useRef()


  return(
    
    <div className="PhoneNumber">
      <div className="modalBodey" ref={menuRef}>
          <div className="topContaine">
            <div className="topElements">
              <h5>Phone number</h5>
              <button onClick={ e => setPhoneNumber(false)}>Cancel</button>
            </div>
            <p>Add a number so the we and confirmed guests can get in touch.</p>
          </div>
            <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}

                  />
            <p id="paragraph">We’ll send you a code to verify your number. Standard message and data rates apply.</p>
          <button className="buttonPhoneNumber">Save</button>
      </div>
    </div>
  )

}