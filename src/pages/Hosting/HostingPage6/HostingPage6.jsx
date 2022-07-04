import "./hostingPage6.scss";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { housesContext } from "../../../Context/HousesContext.jsx";

export default function HostingPage6() {
  let navigate = useNavigate();
  const { updateHouse } = useContext(housesContext);
  const titleRef = useRef()


  const next = () => {
    const titleObject = {
      title: titleRef.current.value
    }
    updateHouse(titleObject);
    navigate("../hostingPage7", { replace: true });
  };

  return (
    <div className="hostingPage6">
      <div className="mainLeft">
        <h1>Let's give your place a name </h1>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
          <div className="subMainRightDiv">
            <h4>Create your title</h4>
            <textarea
              type="text"
              ref={titleRef}
              placeholder="Cheerful 1-bedroom home in Berlin"
            />
            <p>0/50</p>
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="bottomPart">
              <div className="back">
                <button
                  onClick={() => navigate("../hostingPage5", { replace: true })}
                >
                  <u>Back</u>
                </button>
              </div>
              <div className="next">
                <button
                  onClick={next}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
