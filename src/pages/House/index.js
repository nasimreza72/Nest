import { Header, Images, Information, Price, Amenities,CheckInDate } from "../../components/House";

const Houses=()=>{
    return(
        <div className="flex justify-center">
            <div className="w-2/3">
                <Header/>
                <Images/>
                <div className="flex justify-center mt-10">
                    <div className=" w-9/12">
                        <Information/>
                        <Amenities/>
                        <CheckInDate/>
                    </div>
                    <Price className="w-3/12"/>
                </div>

            </div>
        </div>
    )
}

export default Houses;