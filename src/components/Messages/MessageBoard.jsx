import "./MessageBoard.scss";
import {useContext, useRef, useEffect} from "react";
import { houseContext } from "../../Context/HouseContext.jsx";
import { loginContext } from "../../Context/LoginContext.jsx";

export const MessageBoard = () => {
  const {activeConversation, addMessage, conversations, text} = useContext(houseContext);
  const {activeUser} = useContext(loginContext);
  
  const conversation = useRef();
  
  
  useEffect(()=>{
    //  document.querySelector(".conversation").scrollIntoView();
    document.querySelector(".conversation").scrollTop = 1000;
  },[activeConversation])

  return (
    <div className="conversation-container">
      <div className="conversation" ref={conversation}>
        {conversations[activeConversation]?.messages.map((text, index) =>
        <div className={
              text.authorId === activeUser._id
              ? "host-container"
              : "client-container"}>
            <span
              className={
              text.authorId === activeUser._id
              ? "host"
              : "client"}>
              {text.text}
            </span>
        </div>)}
      </div>
      <div className="input-container">
        <input className="text-input" onKeyDown={(e)=>e.key === "Enter" ? addMessage() : null} type="text" ref={text}/>
        <input onClick={addMessage} className="button" type="button" value="Send"/>
      </div>
    </div>
  );
};