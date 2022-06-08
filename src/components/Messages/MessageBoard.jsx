import "./MessageBoard.scss";
import {useRef} from "react";

export const MessageBoard = ({activeMessage, activeUser, setActiveMessage}) => {

  const text=useRef();

  const addMessage=()=>{
    if(text.current.value.length > 0){
      const tempActiveMessage={...activeMessage}
      tempActiveMessage.texts.push({
        sender:activeUser,
        text:text.current.value,
        date:Date.now()
      })
      setActiveMessage(tempActiveMessage);
      text.current.value="";  
    }
  }

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
