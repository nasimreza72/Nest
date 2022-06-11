import "./hostingPage3.scss";

export default function HostingPage3() {


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
                      <button className="decreaseButton">-</button>
                      <div className="showNumber">0</div>
                      <button className="increaseButton">+</button>
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <div className="leftWrapper">Kids</div>
                  <div className="rightWrapper">
                      <button className="decreaseButton">-</button>
                      <div className="showNumber">0</div>
                      <button className="increaseButton">+</button>
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <div className="leftWrapper">Beds</div>
                  <div className="rightWrapper">
                      <button className="decreaseButton">-</button>
                      <div className="showNumber">0</div>
                      <button className="increaseButton">+</button>
                  </div>
              </div>

              <div className="subMainRightDiv">
                  <div className="leftWrapper">Bedrooms</div>
                  <div className="rightWrapper">
                      <button className="decreaseButton">-</button>
                      <div className="showNumber">0</div>
                      <button className="increaseButton">+</button>
                  </div>
              </div>

        
          </div>
          <div className="subMainRightBottom">
              <div className="bottomPart">
                  <div className="back">
                      <button><u>Back</u></button>
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
