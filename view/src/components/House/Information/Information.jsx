import {GrLocation,GrKey} from "react-icons/gr"
import {BsBookmark} from "react-icons/bs"
import {MdOutlineBedroomChild} from "react-icons/md"
export const Information=()=>{
    return(
        <div className="flex justify-start border-b-2 mb-10">
            <div>
                <div>
                    <h1 className=" text-2xl text-left">Room in hostel hosted by St Christophers Inn Berlin Mitte</h1>
                    <img src="" alt="" />
                </div>
                <div className="border-b-2 mb-10">
                    <ul className=" flex mt-5 mb-5">
                        <li className="mr-5">1 guest</li>
                        <li className="mr-5">1 bedroom</li>
                        <li className="mr-5">1 bed</li>
                        <li className="mr-5">1 private bath</li>
                    </ul>
                </div>
                <div className="border-b-2 mb-10">
                    <div className="flex mb-5">
                        <div className=" flex items-center">
                            <GrLocation className=" text-3xl" />
                        </div>
                        <div className=" ml-3">
                            <h2 className=" text-left text-lg font-medium">Great location</h2>
                            <p className=" text-gray-500">90% of recent guests gave the location a 5-star rating.</p>
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <div className=" flex items-center">
                            <GrKey className=" text-3xl"/>
                        </div>
                        <div className=" ml-3">
                            <h2 className=" text-left text-lg font-medium">Great check-in experience</h2>
                            <p className=" text-gray-500">90% of recent guests gave the check-in process a 5-star rating.</p>
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <div className=" flex items-center">
                            <BsBookmark className=" text-3xl"/>
                        </div>
                        <div className=" ml-3">
                            <h2 className=" text-left text-lg font-medium">Wifi</h2>
                            <p className=" text-gray-500">Guests often search for this popular amenity</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className=" text-left mb-5">We have something to offer for every kind of traveller: dorm rooms, private rooms and female-only rooms which all come with comfy beds and lockers to store your things.
                    Did we mention we have a swanky rooftop terrace, too? The perfect place to chill out in the summer with awesome views over Mitte.</p>
                    <p className=" text-left mb-10">At our reception, book yourself into one of our free walking tours of the city or come along on our host…<a href="">read more</a></p>
                </div>
                {/* <div>
                    <h1 className=" text-2xl text-left mb-5 mt-10">Sleeping arrangements</h1>
                    <img className="w-1/2" src="https://a0.muscache.com/im/pictures/8a4568c9-4b46-4bac-8e15-3a3b53707472.jpg?im_w=720" alt="" />
                </div>
                <div className="mt-10 p-10 border-2 w-1/3 mb-10 rounded-lg">
                    <MdOutlineBedroomChild className=" text-3xl"/>
                    <h3 className=" text-lg text-left mb-5 mt-5">Bedroom</h3>
                    <p className=" text-left">1 single bed</p>
                </div> */}
            </div>
        </div>
    )
}