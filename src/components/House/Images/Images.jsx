import { useContext } from "react";
import { houseContext } from "../../../Context/HouseContext.jsx";
import "./Images.scss";

export const Images=()=>{

    const {setShow, images, setCounter} = useContext(houseContext);

    return(
            <div className="images-container">
                <div className="images-left-container">
                    <img onClick={()=>{setShow(true); setCounter(1) }} src={images[0]} alt="" />
                </div>
                <div className="images-right-container">
                        <div><img onClick={()=>{ setShow(true); setCounter(2) }} src={images[1]} alt="" /></div>
                        <div><img onClick={()=>{ setShow(true); setCounter(3) }} className="rounded-img" src={images[2]} alt="" /></div>
                        <div><img onClick={()=>{ setShow(true); setCounter(4) }} src={images[3]} alt="" /></div>
                        <div><img onClick={()=>{ setShow(true); setCounter(5) }} className="rounded-img" src={images[4]} alt="" /></div>
                </div>
            </div>
    )
}