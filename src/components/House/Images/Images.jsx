import { useContext } from "react";
import { houseContext } from "../../../Context/HouseContext.jsx";
import "./Images.scss";

export const Images=()=>{

    const {setShow, house, setCounter} = useContext(houseContext);
    console.log('house :>> ', house);

    // const getPath = () => {
    //     axios.get(`http://localhost:7777/api/house/getImage/${house._id}`)
    //     .then(res=>console.log('res.data image :>> ', res.data))
    //     .catch(err=>console.log('err :>> ', err));
    // }
    // getPath();
    return(
            <div className="images-container">
                <div className="images-left-container">
                    <img onClick={()=>{setShow(true); setCounter(1) }} src={`http://localhost:7777/api/house/getImage/62bc5a7fb932d686c9142a5a/0`} alt="" />
                </div>
                <div className="images-right-container">
                        <div><img onClick={()=>{ setShow(true); setCounter(2) }} src={`http://localhost:7777/api/house/getImage/62bc5a7fb932d686c9142a5a/1`} alt="" /></div>
                        <div><img onClick={()=>{ setShow(true); setCounter(3) }} className="rounded-img" src={`http://localhost:7777/api/house/getImage/62bc5a7fb932d686c9142a5a/2`} alt="" /></div>
                        <div><img onClick={()=>{ setShow(true); setCounter(4) }} src={`http://localhost:7777/api/house/getImage/62bc5a7fb932d686c9142a5a/3`} alt="" /></div>
                        <div><img onClick={()=>{ setShow(true); setCounter(5) }} className="rounded-img" src={`http://localhost:7777/api/house/getImage/62bc5a7fb932d686c9142a5a/4`} alt="" /></div>
                </div>
            </div>
    )
}