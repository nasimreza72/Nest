import { useState, createContext, useContext, useRef, useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import {loginContext} from "../Context/LoginContext.jsx"
import io from "socket.io-client";
import { postDataPrivate, fetchDataPrivate, updateDataPrivate, fetchData } from "../lib/index.jsx";

export const houseContext = createContext();

const activeHouseIdInLocalStorage = JSON.parse(localStorage.getItem("activeHouseId"));

export default function HouseContextProvider(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    const [counter, setCounter]=useState(1);
    const [activeHouseId, setActiveHouseId] = useState(activeHouseIdInLocalStorage);
    const [house,setHouse] = useState({});
    const [conversations,setConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState(0);
    const [rating, setRating] = useState(null);

    const {activeUser,setActiveUser} = useContext(loginContext);

    const navigate = useNavigate();
    const socket = io(`${process.env.REACT_APP_URL}`);
    const text=useRef();


    const createConversation = () => {

        // find conversation between host and user about this house
        const conv = house.conversations.find(conversation=> conversation.hostId === house.hostID && conversation.userId === activeUser._id)
        
        if(!conv){
            const conversationObject={
                hostId:house.hostID,
                userId:activeUser._id,
                messages:[],
                houseId:house._id
            }
            postDataPrivate(`${process.env.REACT_APP_URL}/api/conversation/create`,conversationObject)
            .then(res=>{
                console.log('res.data :>> ', res.data)
                const tempActiveUser = {...activeUser};
                tempActiveUser.conversations.push();
                setActiveUser(tempActiveUser);
            })
            .catch(err=>console.log('err :>> ', err))
        }
        else console.log("You created a converation before");
        navigate("/messages");
    }

    // This functions gets the active user's conversations
    const getConversations = ()=>{
        fetchDataPrivate(`${process.env.REACT_APP_URL}/api/conversation/user/${activeUser._id}`)
        .then((res)=>{
            setConversations(res.data);
            console.log("getConversations runs+++++++")
            res.data.map((text, index) =>{
                console.log('index !!!!!!!!!!!!!!!!!:>> ', index);
                listen(res.data, index)
              })
        })
        .catch(err=>console.log('err :>> ', err))
    }

    // this function gets the conversation
    // const getConversation = (conversationId)=>{
    //     axios.get(`http://localhost:7777/api/conversation/${conversationId}`)
    //     .then(res=>console.log('res.data :>> ', res.data))
    //     .catch(err=>console.log('err :>> ', err))
    // }

    const updateConversation = (conversationId, newMessage) =>{
        updateDataPrivate(`${process.env.REACT_APP_URL}/api/conversation/${conversationId}`, newMessage)
        .then(res=>console.log('res.data  updateConversation:>> ', res.data))
        .catch(err=>console.log('err :>> ', err))
    }

    const listen=(conversationsData, index)=>{
        socket.on(conversationsData[index]._id,(data)=>{
          const tempConversations = [...conversationsData];
          const message={
            text:data.text,
            authorId:data.authorId,
            date:Date.now()
          }
          console.log('message !!!!!!!!!!!!:>> ', message);
          tempConversations[index].messages.push(message);
          setConversations(tempConversations);
          updateConversation(conversationsData[index]._id, tempConversations[index]);
            text.current.value=""; 
        })
    }

    const addMessage=()=>{
      if(text.current.value.length > 0){
        socket.emit("Send_Message", {
          text:text.current.value,
          conversationId:conversations[activeConversation]._id,
          authorId:activeUser._id
        });
      }
      document.querySelector(".conversation").scrollTop = conversations[activeConversation]?.messages.length*30;
    }

    const getHouseById = () => {
        fetchData(`${process.env.REACT_APP_URL}/api/house/${activeHouseId}`)
        .then(res=>{
            console.log('res :>> ');
            setHouse(res.data);
        })
        .catch(err=>console.log('err :>> ', err))
    }

    const createReview = (reviewObj)=>{
        postDataPrivate(`${process.env.REACT_APP_URL}/api/review/create`, reviewObj)
        .then((res)=>{
            console.log('res.data :>> ', res.data);
        })
        .catch(err=>console.log('err :>> ', err))
    }

    const houseVariable={show,handleClose,toggleShow,setShow, house,setHouse, counter,setCounter,createConversation,
        getConversations, conversations, activeConversation,setActiveConversation, listen, addMessage, text,createReview,
        activeHouseId, setActiveHouseId,getHouseById, rating, setRating, navigate}

    return(
        <houseContext.Provider value={houseVariable}>
            {props.children}
        </houseContext.Provider>
    )
}

