import { useState, createContext, useEffect } from 'react'
import axios from 'axios';

export const housesContext = createContext()

const activeCityInLocalStorage = JSON.parse(localStorage.getItem("activeCity"));

export default function HousesContextProvider(props){

    const [houseId, setHouseId] = useState(null);
    const [activeCity,setActiveCity] = useState(activeCityInLocalStorage || {country:"DE", name:"Berlin", lat:52.52437, lng:13.41053});
    const [activeHouses,setActiveHouses] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [houseCount,setHouseCount] = useState(0);

    const createHouse = (houseObject)=>{
        console.log("createHouse");
        
        axios.post(`${process.env.REACT_APP_URL}/api/house/create`, houseObject)
        .then(res=>{
            console.log('res.data :>> ', res.data._id)
            setHouseId(res.data._id);
        })
        .catch(err=>console.log('err :>> ', err))
    }

    const updateHouse = (houseObject)=>{
        console.log("createHouse");
        
        axios.patch(`${process.env.REACT_APP_URL}/api/house/create/${houseId}`, houseObject)
        .then(res=>{
            console.log('Update message >> ', res.data.message)
        })
        .catch(err=>console.log('err :>> ', err))
    }

    const getHousesByCity = ()=>{
        console.log('activeCity :>> ',activeCity);
        axios.get(`${process.env.REACT_APP_URL}/api/house/getCity/${activeCity.name}?pageNumber=${pageNumber}&nPerPage=5`)
        .then(res=>{
            console.log('res.data :>> ', res.data)
            setActiveHouses(res.data.houseList);
            setHouseCount(res.data.houseCount);   
        })
        .catch(err=>console.log('err :>> ', err))
    }

    const housesVariable={createHouse, updateHouse, houseId, activeCity, setActiveCity, getHousesByCity, setActiveHouses, activeHouses
    ,houseCount, pageNumber, setPageNumber, setHouseCount}
  
    return(
        <housesContext.Provider value={housesVariable}>
            {props.children}
        </housesContext.Provider>
    )
}
