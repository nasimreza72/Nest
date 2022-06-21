import {useState} from "react";
import {Dropdown} from "../../../House/Price/Price.jsx";
import "./WhoComp.scss";

const WhoComp = ()=>{
    const [guests,setGuests] = useState("1 guest");
    return(
        <div className="container">
            <Dropdown guests={guests} setGuests={setGuests}/>
        </div>
    )
}

export default WhoComp;