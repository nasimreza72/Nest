import { useContext, useEffect } from "react";
import "./Messages.scss";
import { MessageBoard } from "../../components/Messages/MessageBoard.jsx";
import { loginContext } from "../../Context/LoginContext.jsx";
import { houseContext } from "../../Context/HouseContext.jsx";

export const Messages = ()=>{
    const {activeUser} = useContext(loginContext);
    const {getConversations, conversations,activeConversation,setActiveConversation, listen} = useContext(houseContext);
    
    // const conversationsArray=[{
    //     image:"https://a0.muscache.com/im/pictures/d0dd10d8-84f6-4f66-9e41-a6108ff3ec60.jpg?im_w=720",
    //     sender1:"Nasim Reza",
    //     sender2:"Ömer Iliski",
    //     house:"Bed in 6 Bed Dorm Ensuite",
    //     texts:[{
    //         sender:"Nasim Reza",
    //         text:"hi, is your house available to rent it.",
    //         date:"08.06.2022 14:15:32"
    //     },
    //     {
    //         sender:"Ömer Iliski",
    //         text:"yes, sure",
    //         date:"08.06.2022 14:17:45"
    //     }
    //     ]
    // },
    // {
    //     image:"https://a0.muscache.com/im/pictures/7f83fbbe-e895-4846-bf87-7a4638f773f1.jpg?im_w=720",
    //     sender1:"Ronny Korneli",
    //     sender2:"Ömer Iliski",
    //     house:"Sapa ,Mini- Privat Room in Ferienwohnung",
    //     texts:[{
    //         sender:"Udo Medlarz",
    //         text:"hi, i want to rent your house",
    //         date:"08.06.2022 14:15:32"
    //     },
    //     {
    //         sender:"Ömer Iliski",
    //         text:"ok",
    //         date:"08.06.2022 14:17:45"
    //     }
    //     ]
    // },
    // {
    //     image:"https://a0.muscache.com/im/pictures/7f83fbbe-e895-4846-bf87-7a4638f773f1.jpg?im_w=720",
    //     sender1:"Joel",
    //     sender2:"Ömer Iliski",
    //     house:"Sapa ,Mini- Privat Room in Ferienwohnung",
    //     texts:[{
    //         sender:"Udo Medlarz",
    //         text:"hi, can i see the house",
    //         date:"08.06.2022 14:15:32"
    //     },
    //     {
    //         sender:"Ömer Iliski",
    //         text:"yes, you can",
    //         date:"08.06.2022 14:17:45"
    //     }
    //     ]
    // }]
    // const [conversations,setconversations]=useState(conversationsArray);
    
    
    // console.log('conversations :>> ', conversations);
    // console.log('activeConversation :>> ', activeConversation);
  
    const conversationClick = (index) =>{
        setActiveConversation(index);
        // getConversations();
        // getConversation(conversations[index]._id);
        // listen(index);
    }

    useEffect(()=>{
        getConversations();
    },[])
    // useEffect(()=>{
    //     console.log('conversations UseEffect :>> ', conversations);
        
    //   },[])
    return(
    <>
        <h3>My Messages</h3>
        <div className="main-container">
            <div className="messages-container">
                {conversations.map((conversation, index)=>
                    // console.log('message :>> ', message);
                    <div className="message-container" onClick={()=>conversationClick(index)}>
                        <div className="img-container">
                            <img src={`http://localhost:7777/api/house/getImage/${conversation.houseId._id}/0`}/>
                        </div>
                        <div>
                            <p>{activeUser.role === "user" ? conversation.hostId.loginInfo.email : conversation.userId.loginInfo.email}</p>
                            <h3>{conversation.houseId.title}</h3>
                        </div>
                    </div>
                )}
            </div>
            <div className="message-board-container">
                <div className="header">
                    <div className="img-container">
                        <img src={`http://localhost:7777/api/house/getImage/${conversations[activeConversation]?.houseId?._id}/0`}/>
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