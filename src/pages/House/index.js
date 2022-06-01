import { Header, Images, Information, Price, Amenities,CheckInDate, Reviews, Location, HostedBy } from "../../components/House";

const Houses=()=>{
    return(
        <div className="flex justify-center  ">
            <div className="w-4/5 xl:w-[72rem] grid">
                <Header/>
                <Images/>
                <div className="flex justify-center mt-10 ">
                    <div className="w-full md:w-8/12">
                        <Information/>
                        <Amenities/>
                        <CheckInDate/>
                    </div>
                    <Price/>
                </div>
                <Reviews/>
                <Location/>
                <HostedBy/>
            </div>
        </div>
    )
}

export default Houses;