import { useState } from "react";
import "../style.css";
import { FaCheck } from "react-icons/fa";



export default function Filter ({setFilter}){
    const [ checked, setChecked ] = useState(false);
    const [ instantBook, setInstantBook ] = useState(false);
    const [ superHost, setSuperHost ] = useState(false);
    const [ cancellation, setCancellation ] = useState(false);
    const [ count, setCount ] = useState(0)



    return(
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
                    <div style={{opacity: count>0? "1": "0.25"}} onClick={()=>setCount(count-1>=0?count-1:0)}> - </div>
                    <div className="counter">{count}</div>
                    <div onClick={()=>setCount(count+1)}> + </div>
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
                <div className="counterDivWrapper">
                  <div>Bathrooms</div>
                  <div className="counterDiv">
                    <div> - </div>
                    <div className="counter">0</div>
                    <div> + </div>
                  </div>
                </div>
              </div>

              <hr />

              <h2>Verified places</h2>

              <div className="verifiedPlaces">
                <div className="subVerifiedPlaces">
                  <div>
                    <div>Airbnb places</div>
                    <div className="selectionOfPlaces">
                      A selection of places to stay verified for quality and
                      design{" "}
                    </div>
                  </div>
                </div>

                <div>
                  <FaCheck
                    style={{ color: checked == true ? "green" : "gray" }}
                    onClick={() => {
                      if (checked == true) {
                        setChecked(false);
                      } else if (checked == false) {
                        setChecked(true);
                      }
                    }}
                    className="FaCheck"
                  />
                </div>
              </div>

              <hr />

              <div className="verifiedPlaces">
                <div className="subVerifiedPlaces">
                  <div>
                    <div>Instant Book</div>
                    <div className="selectionOfPlaces">
                      Listings you can book without waiting for Host approval
                    </div>
                  </div>
                </div>

                <div>
                  <FaCheck
                    style={{ color: instantBook == true ? "green" : "gray" }}
                    onClick={() => {
                      if (instantBook == true) {
                        setInstantBook(false);
                      } else if (instantBook == false) {
                        setInstantBook(true);
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
                  <div>
                    <div>Superhost</div>
                    <div className="selectionOfPlaces">
                      Stay with recognized Hosts
                    </div>
                  </div>
                  <div>
                    <a href="*">
                      <u>Learn more</u>
                    </a>
                  </div>
                </div>

                <div>
                  <FaCheck
                    style={{ color: superHost == true ? "green" : "gray" }}
                    onClick={() => {
                      if (superHost == true) {
                        setSuperHost(false);
                      } else if (superHost == false) {
                        setSuperHost(true);
                      }
                    }}
                    className="FaCheck"
                  />
                </div>
              </div>

              <div className="verifiedPlaces">
                <div className="subVerifiedPlaces">
                  <div>
                    <div>Free cancellation</div>
                    <div className="selectionOfPlaces">
                    Only show stays that offer free cancellation
                    </div>
                  </div>
                </div>

                <div>
                  <FaCheck
                    style={{ color: cancellation == true ? "green" : "gray" }}
                    onClick={() => {
                      if (cancellation == true) {
                        setCancellation(false);
                      } else if (cancellation == false) {
                        setCancellation(true);
                      }
                    }}
                    className="FaCheck"
                  />
                </div>
              </div>

              <hr />
          

            </div>
          </section>
        </div>)

}