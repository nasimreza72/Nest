import "./DateOfBirth.scss"
import React, { useState ,useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css'


export default function DateOfBirth() {
  const { dateOfBirth, setDateOfBirth } = useContext(profileContext)
  const [selectedDate, setSelectedDate] = useState(new Date())
  let menuRef = useRef()


  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
        if(!menuRef.current.contains(e.target))
        setDateOfBirth(false)
    })
}, [dateOfBirth])
  
  
  return(
    
    <div className="DateOfBirth">
      <div className="modalBodey" ref={menuRef}>
          <div className="topContaine">
            <div className="topElements">
              <h5>Date of birth</h5>
              <button onClick={ e => setDateOfBirth(false)}>Cancel</button>
            </div>
          </div>
          <div className="DatePickerContainer">
            <DatePicker
                className="datePicker"
                onChange={setSelectedDate}
                value={selectedDate} />
          </div>
          <button className="buttonBirthDate">Save</button>
      </div>
    </div>
  )

}