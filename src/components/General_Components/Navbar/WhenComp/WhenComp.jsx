import { useState } from 'react';
import Calendar from 'react-calendar';
import "./WhenComp.scss";

const WhenComp = ()=>{
    const [value, setValue] = useState(new Date());
    const onChange1=()=>{

    }
    const onChange2=()=>{
        
    }
    return(
        <div className='when-container'>
            <h4>Choose Dates</h4>
            <div className='calendars-container'>
                <div className='calendar1'>
                    <Calendar onChange={onChange1} value={value} />
                </div>
                <div
                className='calender2' >
                    <Calendar onChange={onChange2} value={value} />
                </div>
            </div>
        </div>
    )
}

export default WhenComp;