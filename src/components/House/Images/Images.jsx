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
                    <img onClick={()=>{setShow(true); setCounter(1) }} src={`${process.env.REACT_APP_URL}/api/house/getImage/${house._id}/0`} alt="" />
                </div>
                <div className="images-right-container">
                        <div><img onClick={()=>{ setShow(true); setCounter(2) }} src={`${process.env.REACT_APP_URL}/api/house/getImage/${house._id}/1`} alt="" /></div>
                        <div><img onClick={()=>{ setShow(true); setCounter(3) }} className="rounded-img" src={`${process.env.REACT_APP_URL}/api/house/getImage/${house._id}/2`} alt="" /></div>
                        <div><img onClick={()=>{ setShow(true); setCounter(4) }} src={`${process.env.REACT_APP_URL}/api/house/getImage/${house._id}/3`} alt="" /></div>
                        <div><img onClick={()=>{ setShow(true); setCounter(5) }} className="rounded-img" src={`${process.env.REACT_APP_URL}/api/house/getImage/${house._id}/4`} alt="" /></div>
                </div>
            </div>
    )
}