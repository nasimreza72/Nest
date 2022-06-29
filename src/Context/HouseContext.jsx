import { useState, createContext, useEffect, useContext } from 'react'
import {loginContext} from "../Context/LoginContext.jsx"
import axios from 'axios';

export const houseContext = createContext()

export default function HouseContextProvider(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    const [counter, setCounter]=useState(1);

    const [house,setHouse] = useState({});

    const {activerUser} = useContext(loginContext);

    
    const createConversation = () => {
        // axios.get("http://localhost:7777/api/conversation")
        // .then(res=>{
        //     console.log('res.data :>> ', res.data);
        // })
        // .catch(err=>console.log('err :>> ', err))
        house.conversations.forEach(conversation => {
            if(conversation.hostId == house.hostId && conversation.userId == activerUser._id){
                console.log('there is a conversation before :>> ', conversation);
            }
            else {
                const conversationObject={
                    hostId:house.hostId,
                    userId:activerUser._id,
                    messages:[],
                    houseId:house._id
                }
                axios.post("http://localhost:7777/api/conversation/create",conversationObject)
                .then(res=>console.log('res.data :>> ', res.data))
                .catch(err=>console.log('err :>> ', err))
            }
        });
    }
    
    useEffect(()=>{
        axios.get(`http://localhost:7777/api/house/62bc7be7e8cb1cb70886102f`)
        .then(res=>{
            console.log('res :>> ');
            setHouse(res.data);
        })
        .catch(err=>console.log('err :>> ', err))
    },[])
    
    const houseVariable={show,handleClose,toggleShow,setShow, house,counter,setCounter,createConversation}

    return(
        <houseContext.Provider value={houseVariable}>
            {props.children}
        </houseContext.Provider>
    )
}
