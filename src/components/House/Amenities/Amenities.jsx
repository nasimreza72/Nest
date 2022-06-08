import {GrElevator} from "react-icons/gr";
import {IoLaptopOutline,IoMedkitOutline} from "react-icons/io5";
import {AiOutlineWifi} from "react-icons/ai";
import {GiComb,GiHairStrands} from "react-icons/gi";
import {MdOutlineSmokeFree} from "react-icons/md";
import {FaFireExtinguisher} from "react-icons/fa";
import {Button} from "../";
import "./Amenities.scss";

export const Amenities = ()=>{
    const allAmenities=[
    // {
    //     sybmol:<GrElevator/>,
    //     text:"Elevator"
    // },
    {
        sybmol:<AiOutlineWifi/>,
        text:"Kitchen"
    },
    {
        sybmol:<AiOutlineWifi/>,
        text:"Wifi"
    },
    {
        sybmol:<AiOutlineWifi/>,
        text:"TV"
    },
    {
        sybmol:<AiOutlineWifi/>,
        text:"Washer"
    },
    {
        sybmol:<IoLaptopOutline/>,
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
    const houseAmenities=["Kitchen","Wifi","TV","Washer","Dedicated workspace"]

    const houseAmenitiesWithSymbols = houseAmenities.map(item=>{
        return allAmenities.filter(e=>e.text===item)
    })
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