import { useEffect, useContext } from "react";
import { Header, Images, Information, Price, Amenities,CheckInDate, Reviews, Location, Slider } from "../../components/House";
import { houseContext } from "../../Context/HouseContext.jsx";
import "./House.scss";

const House=()=>{
    const {getHouseById,activeHouseId} = useContext(houseContext);
    useEffect(()=>{
        getHouseById();
    },[])
    useEffect(()=>{
        console.log('localStorage !!!!!!!!!!!!!!!1 :>> ', activeHouseId);
        localStorage.setItem("activeHouseId",JSON.stringify(activeHouseId))
      },[activeHouseId])
      
    return(
            <div className="house-container">
                <div className="house-subcontainer">
                    <Header/>
                    <Images/>
                    <div className="content-container">
                        <div className="content">
                            <Information/>
                            {/* <Amenities/> */}
                            <CheckInDate/>
                        </div>
                        <Price/>
                    </div>
                    <Reviews/>
                    <Location/>
                </div>
                <Slider/>
            </div>
    )
}

export default House;