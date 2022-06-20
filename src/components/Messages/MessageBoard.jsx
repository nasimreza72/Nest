import "./MessageBoard.scss";
import {useEffect, useRef} from "react";
import io from "socket.io-client";

export const MessageBoard = ({activeMessage, activeUser, setActiveMessage}) => {

  const text=useRef();
  const conversationId=123;
  const socket = io("http://localhost:7777");

  const addMessage=()=>{
    
    if(text.current.value.length > 0){
      socket.emit("Send_Message", {
        text:text.current.value,
        conversationId
      });
      const tempActiveMessage={...activeMessage}
      tempActiveMessage.texts.push({
        sender:activeUser,
        text:text.current.value,
        date:Date.now()
      })
      console.log("tempActiveMessage :>>",tempActiveMessage);
      setActiveMessage(tempActiveMessage);
      text.current.value="";  
    }
  }
  
  useEffect(()=>{
    socket.on(conversationId,(data)=>{
       console.log('data :>> ', data);
    })
  },[])
  return (
    <div className="messages">
      <div>
        {activeMessage.texts.map((text) =>
        <div className={
          text.sender == activeUser
          ? "host-container"
          : "client-container"
        }>
          <span
            className={
              text.sender == activeUser
              ? "host"
              : "client"
            }
            >
            {text.text}
          </span>
        </div>
        )}
      </div>
      <div className="input-container">
        <input className="text-input" onKeyDown={(e)=>e.key=="Enter" ? addMessage() : null} type="text" ref={text}/>
        <input onClick={addMessage} className="button" type="button" value="Send"/>
      </div>
    </div>
  );
};
