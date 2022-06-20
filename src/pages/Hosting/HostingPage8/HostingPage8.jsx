import "./hostingPage8.scss";
import { IoMdPhotos } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function HostingPage8() {
  let navigate = useNavigate();
  return (
    <div className="hostingPage8">
      <div className="mainLeft">
        <h1>Set your price</h1>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
          <div className="subMainRightDiv">
            <button className="decreaseButton">-</button>
            <input type="text" placeholder="€00" />
            <button className="increaseButton">+</button>
          </div>
          <div className="subMainRightText">
            <h6>Do you want to offer your place for free</h6>
            <input type="checkbox" />
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="back">
              <button
                onClick={() => navigate("../hostingPage7", { replace: true })}
              >
                <u>Back</u>
              </button>
            </div>
            <div className="next">
              <button
                onClick={() => navigate("../hostingPage9", { replace: true })}
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
