import { useState } from "react";
import "../../pages/Houses/style.css";
import { FaCheck } from "react-icons/fa";

export default function Filter({ setFilter }) {
  const [checked, setChecked] = useState(false);
  const [superHost, setSuperHost] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="filter">
      <section>
        <p>
          <strong>More filters</strong>
        </p>
        <hr />
        <button onClick={() => setFilter(false)}>x</button>
        <div className="filterSubsection">
          <h2>Rooms and beds</h2>

          <div>
            <div className="counterDivWrapper">
              <div>Beds</div>
              <div className="counterDiv">
                <div
                  style={{ opacity: count > 0 ? "1" : "0.25" }}
                  onClick={() => setCount(count - 1 >= 0 ? count - 1 : 0)}
                >
                  {" "}
                  -
                </div>
                <div className="counter">{count}</div>
                <div onClick={() => setCount(count + 1)}> + </div>
              </div>
            </div>
            <div className="counterDivWrapper">
              <div>Bedrooms</div>
              <div className="counterDiv">
                <div> - </div>
                <div className="counter">0</div>
                <div> + </div>
              </div>
            </div>
          </div>

          <hr />

          <h2>Type of place</h2>

          <div className="verifiedPlaces">
            <div className="subVerifiedPlaces">
              <div>Apartment</div>
            </div>

            <div>
              <FaCheck
                style={{ color: checked === true ? "green" : "gray" }}
                onClick={() => {
                  if (checked === true) {
                    setChecked(false);
                  } else if (checked === false) {
                    setChecked(true);
                  }
                }}
                className="FaCheck"
              />
            </div>
          </div>


          <div className="verifiedPlaces">
            <div className="subVerifiedPlaces">
              <div>House</div>
            </div>

            <div>
              <FaCheck
                style={{ color: checked === true ? "green" : "gray" }}
                onClick={() => {
                  if (checked === true) {
                    setChecked(false);
                  } else if (checked === false) {
                    setChecked(true);
                  }
                }}
                className="FaCheck"
              />
            </div>
          </div>


          <div className="verifiedPlaces">
            <div className="subVerifiedPlaces">
              <div>Private room</div>
            </div>

            <div>
              <FaCheck
                style={{ color: checked === true ? "green" : "gray" }}
                onClick={() => {
                  if (checked === true) {
                    setChecked(false);
                  } else if (checked === false) {
                    setChecked(true);
                  }
                }}
                className="FaCheck"
              />
            </div>
          </div>

          <div className="verifiedPlaces">
            <div className="subVerifiedPlaces">
              <div>Shared room</div>
            </div>

            <div>
              <FaCheck
                style={{ color: checked === true ? "green" : "gray" }}
                onClick={() => {
                  if (checked === true) {
                    setChecked(false);
                  } else if (checked === false) {
                    setChecked(true);
                  }
                }}
                className="FaCheck"
              />
            </div>
          </div>


          <div className="verifiedPlaces">
            <div className="subVerifiedPlaces">
              <div>Attic</div>
            </div>

            <div>
              <FaCheck
                style={{ color: checked === true ? "green" : "gray" }}
                onClick={() => {
                  if (checked === true) {
                    setChecked(false);
                  } else if (checked === false) {
                    setChecked(true);
                  }
                }}
                className="FaCheck"
              />
            </div>
          </div>

          <hr />

          <h2>More options</h2>

          <div className="verifiedPlaces">
            <div className="subVerifiedPlaces">
                <div>Stay with recognized Hosts</div>
            </div>

            <div>
              <FaCheck
                style={{ color: superHost === true ? "green" : "gray" }}
                onClick={() => {
                  if (superHost === true) {
                    setSuperHost(false);
                  } else if (superHost === false) {
                    setSuperHost(true);
                  }
                }}
                className="FaCheck"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
