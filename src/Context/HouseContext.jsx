import { useState, createContext, useEffect, useContext } from 'react'
import {useNavigate} from "react-router-dom";
import {loginContext} from "../Context/LoginContext.jsx"
import axios from 'axios';

export const houseContext = createContext()

export default function HouseContextProvider(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    const [counter, setCounter]=useState(1);
    const [house,setHouse] = useState({});
    const [conversations,setConversations] = useState([]);
    const {activeUser,setActiveuser} = useContext(loginContext);

    const navigate = useNavigate();


    const createConversation = () => {
        const conv = house.conversations.find(conversation=> conversation.hostId === house.hostID && conversation.userId === activeUser._id)
        if(!conv){
            const conversationObject={
                hostId:house.hostID,
                userId:activeUser._id,
                messages:[],
                houseId:house._id
            }
            axios.post("http://localhost:7777/api/conversation/create",conversationObject)
            .then(res=>{
                console.log('res.data :>> ', res.data)
                const tempActiveUser = {...activeUser};
                tempActiveUser.conversations.push();
                setActiveuser(tempActiveUser);
            })
            .catch(err=>console.log('err :>> ', err))
        }
        else console.log("You created a converation before");
        navigate("/messages");
    }
    
    const getConversations = ()=>{
        const tempConv=[]
        activeUser.conversations.map(conversationId=>{
            axios.get(`http://localhost:7777/api/conversation/${conversationId}`)
            .then(res=>{
                tempConv.push(res.data);
                console.log('tempConv :>> ', tempConv);
                setConversations(tempConv);   
            })
            .catch(err=>console.log('err :>> ', err))
        })
        
    }

    useEffect(()=>{
        axios.get(`http://localhost:7777/api/house/62bdac89053e041e08e6139d`)
        .then(res=>{
            console.log('res :>> ');
            setHouse(res.data);
        })
        .catch(err=>console.log('err :>> ', err))
    },[])
    
    const houseVariable={show,handleClose,toggleShow,setShow, house,counter,setCounter,createConversation,
        getConversations, conversations}

    return(
        <houseContext.Provider value={houseVariable}>
            {props.children}
        </houseContext.Provider>
    )
}
