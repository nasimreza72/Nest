import "./hostingPage2.scss";
import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MapContainer from "../../../components/HousesComponents/MapContainer.jsx";
import { useEffect, useState } from "react";

import Geocode from "react-geocode";

export default function HostingPage2() {
  const [currentAddress, setCurrentAddress] = useState(null);

  let navigate = useNavigate();

  function addAddress() {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

    Geocode.setLanguage("en");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();

    navigator.geolocation.getCurrentPosition((position) => {
      Geocode.fromLatLng(
        position.coords.latitude,
        position.coords.longitude
      ).then(
        (response) => {
          const address = response.results[0].formatted_address;
          setCurrentAddress(address);
          console.log("Current location address-->", address);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  return (
    <div className="hostingPage2">
      <div className="mainLeft">
        <h1>Where is your place located?</h1>
      </div>

      <div className="mainRight">
        <div className="subMainRight">
          <MapContainer />
          <div className="subMainRightDiv">
            <FaMapMarkerAlt />

            <input onClick={ ()=> setCurrentAddress(null)} 
            value={currentAddress} type="text"  
            placeholder="Enter your address" />

            <div onClick={addAddress} className="myCurrentLocation">
              <FaLocationArrow />
              <button> use my current location</button>
            </div>
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="back">
              <button
                onClick={() => navigate("../hostingPage1", { replace: true })}
              >
                <u>Back</u>
              </button>
            </div>
            <div className="next">
              <button
                onClick={() => navigate("../hostingPage3", { replace: true })}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
