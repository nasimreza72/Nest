import { Header, Images, Information, Price, Amenities,CheckInDate, Reviews, Location, Slider } from "../../components/House";
import HouseContextProvider from "../../Context/HouseContext.jsx";
import "./House.scss";

const House=()=>{
    
    return(
        <HouseContextProvider >
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
        </HouseContextProvider>
    )
}

export default House;