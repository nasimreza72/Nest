import { useState, createContext, useEffect } from 'react'
import axios from 'axios';

export const houseContext = createContext()

export default function HouseContextProvider(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    const [counter, setCounter]=useState(1);

    const [house,setHouse] = useState({})
    
    // const house={
    //     title:"3 Bed rooms apartment",
    //     description:"Ideal place for small family",
    //     amenities:{kitchen:true},
    //     images:["https://a0.muscache.com/im/pictures/8a4568c9-4b46-4bac-8e15-3a3b53707472.jpg?im_w=1200",
    //     "https://a0.muscache.com/im/pictures/9dd13789-8644-436d-af02-ff1920ca269a.jpg?im_w=720",
    //     "https://a0.muscache.com/im/pictures/07431e42-dd3a-446f-b583-07a61e29a73b.jpg?im_w=720",
    //     "https://a0.muscache.com/im/pictures/11c3d235-6256-4a0d-91a3-ea478836c9e6.jpg?im_w=720",
    //     "https://a0.muscache.com/im/pictures/70efc7b7-afc9-4583-97bb-5079e6591c64.jpg?im_w=720",
    //     "https://a0.muscache.com/im/pictures/ffd6ec94-48b8-4145-bfb0-f52288a50f43.jpg?im_w=1200"],
    //     rating:"4."
    // }
    

    const houseVariable={show,handleClose,toggleShow,setShow, house,counter,setCounter}
    
    useEffect(()=>{
        axios.get("http://localhost:7777/api/house/62bb3de8d6d08e2bdfaeb1ca")
        .then(res=>{
            console.log('res :>> ');
            setHouse(res.data);
        })
        .catch(err=>console.log('err :>> ', err))
    },[])
    return(
        <houseContext.Provider value={houseVariable}>
            {props.children}
        </houseContext.Provider>
    )
}
