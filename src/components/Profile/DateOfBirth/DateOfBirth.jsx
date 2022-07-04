import { useContext,useState } from "react"
import { profileContext } from '../../../Context/ProfileContext';
import { loginContext } from "../../../Context/LoginContext.jsx"
import "./DateOfBirth.scss"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css'
import setDate from "date-fns/esm/fp/setDate/index.js";

const Date=()=>{
    const { dateOfBirth, setDateOfBirth } = useContext(profileContext)
    const {activeUser, setActiveUser} = useContext(loginContext);
    const [selectedDate, setSelectedDate] = useState()

    console.log('activeUser Date:>> ', activeUser);

    const clickHandler = (e) => {

      const toISOfixed = (inputDate) => {
        return inputDate.getFullYear() + "-" +  
            ("0" + (inputDate.getMonth() + 1)).slice(-2) + "-" +
            ("0" + inputDate.getDate()).slice(-2) + "T00:00:00.000Z";
    }
        //const tempActiveUser = {...activeUser};
        console.log("active user" + activeUser)
        console.log("this is selected date" + typeof selectedDate)
        console.log("#########################" )
        //tempActiveUser.dateOfBirth=selectedDate;
        //setActiveUser(tempActiveUser)
      
        const payload = {
          dateOfBirth:toISOfixed(selectedDate)
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
        .then(data => console.log("data inside", data))
        
        setDateOfBirth(false)
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
                dateFormat="yyyy/MM/dd"
                className="datePicker"
                selected={selectedDate}
                onChange={setSelectedDate}
                value={selectedDate} />
          </div>
          <button className="buttonBirthDate" onClick={clickHandler}>Save</button>
      </div>
    </div>
    )
}

export default Date;