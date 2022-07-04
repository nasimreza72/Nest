import { useState, createContext, useEffect } from 'react'
import axios from 'axios';

export const housesContext = createContext()

export default function HousesContextProvider(props){

    const [houseId, setHouseId] = useState(null);
    
    const createHouse = (houseObject)=>{
        console.log("createHouse");
        axios.post("http://localhost:7777/api/house/create", houseObject)
        .then(res=>{
            console.log('res.data :>> ', res.data._id)
            setHouseId(res.data._id);
        })
        .catch(err=>console.log('err :>> ', err))
    }

    const updateHouse = (houseObject)=>{
        console.log("createHouse");
        axios.patch(`http://localhost:7777/api/house/create/${houseId}`, houseObject)
        .then(res=>{
            console.log('Update message >> ', res.data.message)
        })
        .catch(err=>console.log('err :>> ', err))
    }



    const housesVariable={createHouse, updateHouse, houseId}
  
    return(
        <housesContext.Provider value={housesVariable}>
            {props.children}
        </housesContext.Provider>
    )
}
