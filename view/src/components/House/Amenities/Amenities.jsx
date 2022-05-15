import {GrElevator} from "react-icons/gr";
import {IoLaptopOutline,IoMedkitOutline} from "react-icons/io5";
import {AiOutlineWifi} from "react-icons/ai";
import {GiComb,GiHairStrands} from "react-icons/gi";
import {MdOutlineSmokeFree} from "react-icons/md";
import {FaFireExtinguisher} from "react-icons/fa";
import {Button} from "../";


export const Amenities = ()=>{
    const allAmenities=[
    {
        sybmol:<GrElevator/>,
        text:"Elevator"
    },
    {
        sybmol:<IoLaptopOutline/>,
        text:"Dedicated workspace"
    },
    {
        sybmol:<AiOutlineWifi/>,
        text:"Wifi"
    },
    {
        sybmol:<IoMedkitOutline/>,
        text:"First aid kit"
    },
    {
        sybmol:<GiComb/>,
        text:"Essentials"
    },
    {
        sybmol:<GiHairStrands/>,
        text:"Hair dryer"
    },
    {
        sybmol:<MdOutlineSmokeFree/>,
        text:"Smoke alarm"
    },
    {
        sybmol:<FaFireExtinguisher/>,
        text:"Fire extinguisher"
    }
    ]

    //This data is gonna come from database
    const houseAmenities=["Elevator","Essentials","Hair dryer","Smoke alarm","Wifi"]

    const houseAmenitiesWithSymbols = houseAmenities.map(item=>{
        return allAmenities.filter(e=>e.text==item)
    })
    console.log('houseAmenitiesWithSymbols :>> ', houseAmenitiesWithSymbols);
    return(
        <div className="border-b-2 mb-10">
            <h2 className=" text-left text-2xl mb-5">Amenities</h2>
            <div className=" flex flex-wrap">
                {houseAmenitiesWithSymbols.map(item=> <div className=" w-1/2 flex items-center mb-3">
                    <div className=" mr-3">{ item[0].sybmol}</div> 
                    <div><p>{item[0].text}</p></div> 
                </div>)}
            </div>
            <Button text={"Show all 13 amenities"}/>
        </div>
    )
}