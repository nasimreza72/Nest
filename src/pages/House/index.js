import { Header, Images, Information, Price, Amenities,CheckInDate, Reviews, Location, HostedBy } from "../../components/House";
import "./style.scss";

const Houses=()=>{
    return(
        <div className="house-container">
            <div className="house-subcontainer">
                <Header/>
                <Images/>
                <div className="content-container">
                    <div className="content md:w-8/12">
                        <Information/>
                        <Amenities/>
                        <CheckInDate/>
                    </div>
                    <Price/>
                </div>
                <Reviews/>
                <Location/>
            </div>
        </div>
    )
}

export default Houses;