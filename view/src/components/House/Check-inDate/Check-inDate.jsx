import { useState } from 'react';
import Calendar from 'react-calendar';

export const CheckInDate = ()=>{
    const [value, setValue] = useState(new Date());
    const onChange1=()=>{

    }
    const onChange2=()=>{
        
    }
    return(
        <div className=' flex mb-20'>
            <Calendar className="mr-5" onChange={onChange1} value={value} />
            <Calendar onChange={onChange2} value={value} />
        </div>
    )
}