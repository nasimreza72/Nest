import { useContext } from "react";
import { houseContext } from "../../../Context/HouseContext.jsx";
import "./Images.scss";

export const Images=()=>{

    const {setShow, house, setCounter} = useContext(houseContext);
    return(
            <div className="images-container">
                <div className="images-left-container">
                    <img onClick={()=>{setShow(true); setCounter(1) }} src={house?.images ? house.images[0]:null} alt="" />
                </div>
                <div className="images-right-container">
                        <div><img onClick={()=>{ setShow(true); setCounter(2) }} src={house?.images ? house.images[1]:null} alt="" /></div>
                        <div><img onClick={()=>{ setShow(true); setCounter(3) }} className="rounded-img" src={house?.images ? house.images[2]:null} alt="" /></div>
                        <div><img onClick={()=>{ setShow(true); setCounter(4) }} src={house?.images ? house.images[3]:null} alt="" /></div>
                        <div><img onClick={()=>{ setShow(true); setCounter(5) }} className="rounded-img" src={house?.images ? house.images[4]:null} alt="" /></div>
                </div>
            </div>
    )
}