import { useContext,useState } from "react"
import { profileContext } from '../../../Context/ProfileContext';
import { loginContext } from "../../../Context/LoginContext.jsx"
import "./DateOfBirth.scss"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css'

const Date=()=>{
    const { dateOfBirth, setDateOfBirth } = useContext(profileContext)
    const {activeUser, setActiveUser} = useContext(loginContext);
    const [selectedDate, setSelectedDate] = useState()
<<<<<<< HEAD
=======

>>>>>>> 194b552ea84a1cd9ac0ac83dcea2d6351f8e5d5e
    console.log('activeUser Date:>> ', activeUser);

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
                'Authorization': 'bearer ' + activeUser.token
            },
            body: JSON.stringify(payload)
        }

        console.log('config :>> ', config);

        fetch(url, config)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setActiveUser({...data, token:activeUser.token});
        })
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

export default Date;