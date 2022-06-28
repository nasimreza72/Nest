import { useContext } from "react";
import { houseContext } from "../../../Context/HouseContext.jsx";
import {MdKitchen} from "react-icons/md";
import {BsTv} from "react-icons/bs";
import {AiOutlineWifi} from "react-icons/ai";
import {GiWashingMachine} from "react-icons/gi";
import {SiWorkplace} from "react-icons/si";
import "./Amenities.scss";

export const Amenities = ()=>{

    const {house} = useContext(houseContext);

    const allAmenities=[
    {
        sybmol:<MdKitchen/>,
        text:"Kitchen"
    },
    {
        sybmol:<AiOutlineWifi/>,
        text:"Wifi"
    },
    {
        sybmol:<BsTv/>,
        text:"TV"
    },
    {
        sybmol:<GiWashingMachine/>,
        text:"Washer"
    },
    {
        sybmol:<SiWorkplace/>,
        text:"Dedicated workspace"
    },
    // {
    //     sybmol:<IoMedkitOutline/>,
    //     text:"First aid kit"
    // },
    // {
    //     sybmol:<GiComb/>,
    //     text:"Essentials"
    // },
    // {
    //     sybmol:<GiHairStrands/>,
    //     text:"Hair dryer"
    // },
    // {
    //     sybmol:<MdOutlineSmokeFree/>,
    //     text:"Smoke alarm"
    // },
    // {
    //     sybmol:<FaFireExtinguisher/>,
    //     text:"Fire extinguisher"
    // }
    ]

    //This data is gonna come from database
    // const houseAmenities=["Kitchen","Wifi","TV","Washer","Dedicated workspace"]

    const houseAmenitiesWithSymbols = house?.amenities?.map(item=>{
        console.log('item :>> ', item);
        return allAmenities.filter(e=>e.text===item)
    });
    console.log('houseAmenitiesWithSymbols :>> ', houseAmenitiesWithSymbols);
    return(
        <div className="amenities-container">
            <h2>Amenities</h2>
            <div className="amenities">
                {houseAmenitiesWithSymbols.map(item=> <div className="amenity">
                    <div className="icon-container">{ item[0].sybmol}</div> 
                    <div>{item[0].text}</div>
                </div>)}
            </div>
            {/* <Button text={"Show all 5 amenities"}/> */}
        </div>
    )
}