import "./hostingPage3.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HostingPage3() {
  let navigate = useNavigate();
  const [adultCount, setAdultCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  const [bedsCount, setBedsCount] = useState(0);
  const [bedRoomsCount, setBedRoomsCount] = useState(0);

  return (
    <div className="hostingPage3">
      <div className="mainLeft">
        <h1>How many guests would you like to welcome?</h1>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
          <div className="subMainRightDiv">
            <div className="leftWrapper">Adult</div>

            <div className="rightWrapper">
              <button
                className="decreaseButton"
                style={{ opacity: adultCount > 0 ? "1" : "0.25" }}
                onClick={() =>
                  setAdultCount(adultCount - 1 >= 0 ? adultCount - 1 : 0)
                }
              >
                -
              </button>
              <div className="showNumber">{adultCount}</div>
              <button
                className="increaseButton"
                onClick={() => setAdultCount(adultCount + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="subMainRightDiv">
            <div className="leftWrapper">Kids</div>

            <div className="rightWrapper">
              <button
                className="decreaseButton"
                style={{ opacity: kidsCount > 0 ? "1" : "0.25" }}
                onClick={() =>
                  setKidsCount(kidsCount - 1 >= 0 ? kidsCount - 1 : 0)
                }
              >
                -
              </button>
              <div className="showNumber">{kidsCount}</div>
              <button
                className="increaseButton"
                onClick={() => setKidsCount(kidsCount + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="subMainRightDiv">
            <div className="leftWrapper">Beds</div>

            <div className="rightWrapper">
              <button
                className="decreaseButton"
                style={{ opacity: bedsCount > 0 ? "1" : "0.25" }}
                onClick={() =>
                  setBedsCount(bedsCount - 1 >= 0 ? bedsCount - 1 : 0)
                }
              >
                -
              </button>
              <div className="showNumber">{bedsCount}</div>
              <button
                className="increaseButton"
                onClick={() => setBedsCount(bedsCount + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="subMainRightDiv">
            <div className="leftWrapper">Bedrooms</div>

            <div className="rightWrapper">
              <button
                className="decreaseButton"
                style={{ opacity: bedRoomsCount > 0 ? "1" : "0.25" }}
                onClick={() =>
                  setBedRoomsCount(
                    bedRoomsCount - 1 >= 0 ? bedRoomsCount - 1 : 0
                  )
                }
              >
                -
              </button>
              <div className="showNumber">{bedRoomsCount}</div>
              <button
                className="increaseButton"
                onClick={() => setBedRoomsCount(bedRoomsCount + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="back">
              <button
                onClick={() => navigate("../hostingPage2", { replace: true })}
              >
                <u>Back</u>
              </button>
            </div>
            <div className="next">
              <button
                onClick={() => navigate("../hostingPage4", { replace: true })}
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
