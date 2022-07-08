import "./hostingPage8.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { housesContext } from "../../../Context/HousesContext.jsx";


export default function HostingPage8() {
  const [price, setPrice] = useState(0);
  const [helper, setHelper] = useState(false);
  let navigate = useNavigate();
  const { updateHouse } = useContext(housesContext);


  const next = () => {
    const priceObject = {
      price: price,
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
            <button 
            className="decreaseButton"
            style={{ opacity: price > 0 ? "1" : "0.25" }}
            onClick={() =>
              setPrice(price - 1 >= 0 ? price - 1 : 0)
            }
            >-</button>
            <input onChange={(e) => setPrice(Number(e.target.value))} type="number" value={(price)}  />
            <button 
            className="increaseButton"
            onClick={() =>{setPrice(price + 50)}}
            >+</button>
          </div>
          <div className="subMainRightText">
            <h6>Do you want to offer your place for free</h6>
            <input onClick={()=> {setPrice(0); setHelper(true)}} type="checkbox" />
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
            <div className="next"
            style={
              price || helper ? { opacity: 1 } : { opacity: ".25", zIndex: -1 }
            }
            >
              <button onClick={next}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
