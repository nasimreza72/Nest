import {useContext} from "react";
import {StyledButton} from "../../General_Components"
import { houseContext } from "../../../Context/HouseContext.jsx";
import "./Information.scss";

export const Information=()=>{
    const {house} = useContext(houseContext);
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
                    <h3>Some Information about the host</h3>
                    <p>At our reception, book yourself into one of our free walking tours of the city or come along on our host…<a href="">read more</a></p>
                    <StyledButton text={`Contact Host`}/>
                </div>
            </div>
        </div>
    )
}