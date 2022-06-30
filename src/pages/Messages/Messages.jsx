import { useState } from "react";
import "./Messages.scss";
import { MessageBoard } from "../../components/Messages/MessageBoard.jsx";


export const Messages = ()=>{
    
    // this activeUser will come as props
    const [activeUser, setActiveUser]=useState("Ömer Iliski");
    
    const conversationsArray=[{
        image:"https://a0.muscache.com/im/pictures/d0dd10d8-84f6-4f66-9e41-a6108ff3ec60.jpg?im_w=720",
        sender1:"Nasim Reza",
        sender2:"Ömer Iliski",
        house:"Bed in 6 Bed Dorm Ensuite",
        texts:[{
            sender:"Nasim Reza",
            text:"hi, is your house available to rent it.",
            date:"08.06.2022 14:15:32"
        },
        {
            sender:"Ömer Iliski",
            text:"yes, sure",
            date:"08.06.2022 14:17:45"
        }
        ]
    },
    {
        image:"https://a0.muscache.com/im/pictures/7f83fbbe-e895-4846-bf87-7a4638f773f1.jpg?im_w=720",
        sender1:"Ronny Korneli",
        sender2:"Ömer Iliski",
        house:"Sapa ,Mini- Privat Room in Ferienwohnung",
        texts:[{
            sender:"Udo Medlarz",
            text:"hi, i want to rent your house",
            date:"08.06.2022 14:15:32"
        },
        {
            sender:"Ömer Iliski",
            text:"ok",
            date:"08.06.2022 14:17:45"
        }
        ]
    },
    {
        image:"https://a0.muscache.com/im/pictures/7f83fbbe-e895-4846-bf87-7a4638f773f1.jpg?im_w=720",
        sender1:"Joel",
        sender2:"Ömer Iliski",
        house:"Sapa ,Mini- Privat Room in Ferienwohnung",
        texts:[{
            sender:"Udo Medlarz",
            text:"hi, can i see the house",
            date:"08.06.2022 14:15:32"
        },
        {
            sender:"Ömer Iliski",
            text:"yes, you can",
            date:"08.06.2022 14:17:45"
        }
        ]
    }
]
const [activeConversation, setActiveConversation] = useState(conversationsArray[0]);
const [conversations,setconversations]=useState(conversationsArray);


return(
    <>
        <h3>My Messages</h3>
        <div className="main-container">
            <div className="messages-container">
                {conversations.map((conversation)=>
                    // console.log('message :>> ', message);
                    <div className="message-container" onClick={()=>setActiveConversation(conversation)}>
                        <div className="img-container">
                            <img src={conversation.image}/>
                        </div>
                        <div>
                            <p>{conversation.sender1}</p>
                            <h3>{conversation.house}</h3>
                        </div>

                    </div>
                )}
            </div>
            <div className="message-board-container">
                <div className="header">
                    <div className="img-container">
                        <img src={activeConversation.image}/>
                    </div>
                    <div>
                        <p>{activeConversation.sender1}</p>
                        <h3>{activeConversation.house}</h3>
                    </div>
                </div>
                <MessageBoard activeUser={activeUser} activeConversation={activeConversation} setActiveConversation={setActiveConversation}/>
            </div>
        </div>
    </>
    )
}