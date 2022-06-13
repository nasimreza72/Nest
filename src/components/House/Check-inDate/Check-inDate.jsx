import { useState } from 'react';
import Calendar from 'react-calendar';
import "./Check-inDate.scss";

export const CheckInDate = ()=>{
    const [value, setValue] = useState(new Date());
    const onChange1=()=>{

    }
    const onChange2=()=>{
        
    }
    return(
        <div className='container'>
            <div className='calendar1'>
                <Calendar onChange={onChange1} value={value} />
            </div>
            <div>
                <Calendar onChange={onChange2} value={value} />
            </div>
        </div>
    )
}