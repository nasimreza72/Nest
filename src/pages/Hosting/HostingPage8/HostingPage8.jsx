import "./hostingPage8.scss";
import { IoMdPhotos } from "react-icons/io";

export default function HostingPage8() {
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
