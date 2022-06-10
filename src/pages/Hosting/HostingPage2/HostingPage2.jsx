import "./hostingPage2.scss";
import { FaMapMarkerAlt } from "react-icons/fa";

import MapContainer from "../../../components/HousesComponents/MapContainer.jsx";

export default function HostingPage2() {
  return (
    <div className="hostingPage2">
      <div className="mainLeft">
        <h1>Where is your place located?</h1>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
         <MapContainer />
          <div className="subMainRightDiv">
            <FaMapMarkerAlt/>
            <input type="text" placeholder=" Enter your address" />
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="back">
              <button>
                <u>Back</u>
              </button>
            </div>
            <div className="next">
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
