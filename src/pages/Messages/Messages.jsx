import { useContext, useEffect } from "react";
import "./Messages.scss";
import { MessageBoard } from "../../components/Messages/MessageBoard.jsx";
import { loginContext } from "../../Context/LoginContext.jsx";
import { houseContext } from "../../Context/HouseContext.jsx";

export const Messages = ()=>{
    const {activeUser} = useContext(loginContext);
    const {getConversations, conversations,activeConversation,setActiveConversation, listen} = useContext(houseContext);
  
    const conversationClick = (index) =>{
        setActiveConversation(index);
    }

    useEffect(()=>{
        getConversations();
    },[])
    return(
    <>
        <h3>My Messages</h3>
        <div className="main-container">
            <div className="messages-container">
                {conversations.map((conversation, index)=>
                    <div className="message-container" onClick={()=>conversationClick(index)}>
                        <div className="img-container">
                            <img src={`${process.env.REACT_APP_URL}/api/house/getImage/${conversation?.houseId?._id}/0`}/>
                        </div>
                        <div>
                            <p>{activeUser.role === "user" ? conversation.hostId.loginInfo.email : conversation.userId.loginInfo.email}</p>
                            <h3>{conversation?.houseId?.title}</h3>
                        </div>
                    </div>
                )}
            </div>
            <div className="message-board-container">
                <div className="header">
                    <div className="img-container">
                        <img src={`${process.env.REACT_APP_URL}/api/house/getImage/${conversations[activeConversation]?.houseId?._id}/0`}/>
                    </div>
                    <div>
                        <p>{activeUser.role === "user" ? conversations[activeConversation]?.hostId?.loginInfo.email : conversations[activeConversation]?.userId?.loginInfo.email}</p>
                        <h3>{conversations[activeConversation]?.houseId?.title}</h3>
                    </div>
                </div>
                <MessageBoard/>
            </div>
        </div>
    </>
    )
}