import { useState, createContext, useEffect } from 'react'
import axios from 'axios';

export const housesContext = createContext()

export default function HousesContextProvider(props){

    const [houseId, setHouseId] = useState(0);
    
    const createHouse = (houseObject)=>{
        console.log("createHouse");
        axios.post("http://localhost:7777/api/house/create", houseObject)
        .then(res=>{
            console.log('res.data :>> ', res.data._id)
            setHouseId(res.data._id);
        })
        .catch(err=>console.log('err :>> ', err))
    }


    const housesVariable={createHouse, houseId}
  
    return(
        <housesContext.Provider value={housesVariable}>
            {props.children}
        </housesContext.Provider>
    )
}