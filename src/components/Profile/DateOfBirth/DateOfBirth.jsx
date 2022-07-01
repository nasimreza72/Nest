import "./DateOfBirth.scss"
import React, { useState ,useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import { loginContext } from '../../../Context/LoginContext';

import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css'


export default function DateOfBirth() {
  const { dateOfBirth, setDateOfBirth } = useContext(profileContext)
  const { activeUser, setActiveUser } = useContext(loginContext)
  const [selectedDate, setSelectedDate] = useState(new Date())

  
const clickHandler = (e) => {
  //const tempActiveUser = {...activeUser};
  console.log("active user" + activeUser)
  
  console.log("#########################" )
  //tempActiveUser.dateOfBirth=selectedDate;
  //setActiveUser(tempActiveUser)

  const payload = {
    dateOfBirth:selectedDate
  }

  const url = `http://localhost:7777/api/user/` + activeUser._id
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
}


  return(
    
    <div className="DateOfBirth">
      <div className="modalBodey" >
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
          <button className="buttonBirthDate" onClick={clickHandler}>Save</button>
      </div>
    </div>
  )

}