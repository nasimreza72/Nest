import "./hostingPage7.scss";
import { IoMdPhotos } from "react-icons/io";
import { useNavigate } from "react-router-dom";


export default function HostingPage7() {
  let navigate = useNavigate();
  return (
    <div className="hostingPage7">
      <div className="mainLeft">
        <h1>Now, let's describe your place </h1>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
          <div className="subMainRightDiv">
            <h4>Create your description</h4>
            <textarea
              type="text"
              placeholder="You'll have a great time at this comfortable place to stay."
            />
            <p>0/500</p>
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="back">
              <button
                onClick={() => navigate("../hostingPage6", { replace: true })}
              >
                <u>Back</u>
              </button>
            </div>
            <div className="next">
              <button
                onClick={() => navigate("../hostingPage8", { replace: true })}
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
