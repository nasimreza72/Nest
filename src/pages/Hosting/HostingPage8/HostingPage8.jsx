import "./hostingPage8.scss";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { housesContext } from "../../../Context/HousesContext.jsx";


export default function HostingPage8() {
  let navigate = useNavigate();
  const { updateHouse } = useContext(housesContext);
  const priceRef = useRef();

  const next = () => {
    const priceObject = {
      price: priceRef.current.value,
    };
    updateHouse(priceObject);
    navigate("../hostingPage9", { replace: true });
  };

  return (
    <div className="hostingPage8">
      <div className="mainLeft">
        <h1>Set your price</h1>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
          <div className="subMainRightDiv">
            <button className="decreaseButton">-</button>
            <input type="text" ref={priceRef} placeholder="€00" />
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
              <button onClick={next}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
