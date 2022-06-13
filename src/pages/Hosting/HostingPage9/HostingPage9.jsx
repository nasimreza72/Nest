import "./hostingPage9.scss";
import { IoMdPhotos } from "react-icons/io";

export default function HostingPage9() {
  return (
    <div className="hostingPage9">
      <div className="mainLeft">
        <h1>Check out your listing!</h1>
        <p>
          Once you save, we'll ask yo to confirm a few details before you can
          publish.
        </p>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
          <div className="subMainRightDiv">
            <h2> All informations </h2>
            <h5> Summary of all informations</h5>
            <div className="allInfoList"></div>
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