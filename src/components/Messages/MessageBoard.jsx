import "./MessageBoard.scss";
import {useEffect, useContext} from "react";
import { houseContext } from "../../Context/HouseContext.jsx";
import { loginContext } from "../../Context/LoginContext.jsx";


export const MessageBoard = () => {
  const {activeConversation, listen,addMessage, conversations, text} = useContext(houseContext);
  const {activeUser} = useContext(loginContext);
  

  console.log('conversations :>> ', conversations);
  console.log('activeConversation :>> ', activeConversation);

  useEffect(()=>{
    listen();
  },[])
  return (
    <div className="messages">
      <div>
        {conversations[activeConversation]?.messages.map((text) =>
        <div className={
          text.authorId === activeUser._id
          ? "host-container"
          : "client-container"
        }>
          <span
            className={
              text.authorId === activeUser._id
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
        <input className="text-input" onKeyDown={(e)=>e.key === "Enter" ? addMessage() : null} type="text" ref={text}/>
        <input onClick={addMessage} className="button" type="button" value="Send"/>
      </div>
    </div>
  );
};
