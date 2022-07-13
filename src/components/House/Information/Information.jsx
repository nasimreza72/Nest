import {useContext} from "react";
import {StyledButton} from "../../General_Components"
import { houseContext } from "../../../Context/HouseContext.jsx";
import { loginContext } from "../../../Context/LoginContext.jsx";
import "./Information.scss";

export const Information=(props)=>{
    const {house, createConversation} = useContext(houseContext);
    const {activeUser} = useContext(loginContext);
    return(
        <div className="information-container">
            <div>
                <div className="house-information">
                    <h1>{house.description}</h1>
                    <ul>
                        <li>1 guest</li>
                        <li>1 bedroom</li>
                        <li>1 bed</li>
                        <li>1 private bath</li>
                    </ul>
                </div>
                <div className="host-information">
                    <h3>Some Informations</h3>
                    <p>At our reception, book yourself into one of our free walking tours of the city or come along on our host…<a href="">read more</a></p>
                        {activeUser?.role === "user" ? <StyledButton onClick={createConversation} text={`Contact Host`}/> :null}
                </div>
            </div>
        </div>
    )
}