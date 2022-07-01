import { Header, Images, Information, Price, Amenities,CheckInDate, Reviews, Location, Slider } from "../../components/House";
import "./House.scss";

const House=()=>{
    
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