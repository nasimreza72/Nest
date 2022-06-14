import "./hostingPage5.scss";
import { IoMdPhotos } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function HostingPage5() {
  let navigate = useNavigate();
  return (
    <div className="hostingPage5">
      <div className="mainLeft">
        <h1>Next, let's add some photos of your place</h1>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
          <div className="subMainRightDiv">
            <div className="uploadImageTop">
              <IoMdPhotos className="logo" />
              <div className="dragPhoto">Drag your photo here</div>
              <div className="addPhoto">Add at least 5 photos</div>
            </div>
            <div className="uploadImageBottom">
              <button className="uploadFromDevice">
                Upload from your device
              </button>
            </div>
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="back">
              <button
                onClick={() => navigate("../hostingPage4", { replace: true })}
              >
                <u>Back</u>
              </button>
            </div>
            <div className="next">
              <button
                onClick={() => navigate("../hostingPage6", { replace: true })}
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
