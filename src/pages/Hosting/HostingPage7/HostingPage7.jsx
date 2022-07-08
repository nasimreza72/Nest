import "./hostingPage7.scss";
import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { housesContext } from "../../../Context/HousesContext.jsx";

export default function HostingPage7() {
  const [helper, setHelper] = useState(false);
  let navigate = useNavigate();
  const { updateHouse } = useContext(housesContext);
  const descriptionRef = useRef();

  const next = () => {
    const descriptionObject = {
      description: descriptionRef.current.value,
    };
    updateHouse(descriptionObject);
    navigate("../hostingPage8", { replace: true });
  };

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
              onChange={() => setHelper(true)}
              type="text"
              ref={descriptionRef}
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
            <div
              className="next"
              style={helper ? { opacity: 1 } : { opacity: ".25", zIndex: -1 }}
            >
              <button onClick={next}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
