import "./style.css";
import {
  FaAngleDown,
  FaFilter,
  FaStar,
  FaHeart,
  FaCheck,
} from "react-icons/fa";
import image from "./map.png";
import { useState } from "react";

const Houses = () => {
  const [filter, setFilter] = useState(false);
  const [checked, setChecked] = useState(false);
  const [instantBook, setInstantBook] = useState(false);

  return (
    <div className="Houses">
      <nav>
        <div className="wrapper">
          <div className="subWrapper mediaScreenMax475">
            <p>Price </p>
            <FaAngleDown style={{ display: "inline" }} />
          </div>
          <div className="subWrapper">
            <p>Type of place</p>
            <FaAngleDown style={{ display: "inline" }} />
          </div>
          <div className="subWrapperRightBorder"></div>
        </div>

        <div className="wrapper">
          <div className="subWrapper mediaScreenMax690">
            <p>Free cancellation</p>
          </div>
          <div className="subWrapper mediaScreenMax690">
            <p>Wifi</p>
          </div>
          <div className="subWrapper mediaScreenMax885">
            <p>Kitchen</p>
          </div>
          <div className="subWrapper mediaScreenMax885">
            <p>Washer</p>
          </div>
          <div className="subWrapper mediaScreenMax1200">
            <p>Self check-in</p>
          </div>
          <div className="subWrapper mediaScreenMax1200">
            <p>Dedicated workshop</p>
          </div>
          <div className="subWrapper mediaScreenMax1450">
            <p>Free parking</p>
          </div>
          <div className="subWrapper mediaScreenMax1450">
            <p>Dryer</p>
          </div>
          <div className="subWrapper mediaScreenMax1650">
            <p>Pool</p>
          </div>
          <div className="subWrapper mediaScreenMax1650">
            <p>Air conditioning</p>
          </div>
          <div className="subWrapper mediaScreenMax1750">
            <p>Iron</p>
          </div>
          <div className="subWrapper mediaScreenMax1750">
            <p>Gym</p>
          </div>
          <div className="subWrapper mediaScreenMax690 hiddenAmenities">
            <p>Amenities</p>
          </div>
          <div className="subWrapper" onClick={() => setFilter(true)}>
            <FaFilter style={{ display: "inline", marginRight: 10 }} />
            <p>Filters</p>
          </div>
        </div>
      </nav>

      {filter && (
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
                    <div> - </div>
                    <div className="counter">0</div>
                    <div> + </div>
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
          

            </div>
          </section>
        </div>
      )}

      <hr />

      <main>
        <section className="leftSection">
          <div className="subSection1">
            <p>300+ stays in map area</p>
            <p style={{ color: "gray" }}>
              Enter dates and number of guests to see the total price per night.
            </p>
            <p>
              Support refugees fleeing Ukraine by donating throuh Airbnb.org.
              <u>Donate now</u>
            </p>
          </div>

          <div className="subSection">
            <img
              src="https://i.guim.co.uk/img/media/f1e0f389c933cd331eab1f4d9a95743d2ba36876/0_1_2000_1201/master/2000.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=49534fe4c19fa050a93ebcdb4db0282b"
              alt="photo of an apartment"
            />
            <div className="divInsideSubSection">
              <div>
                <p>Private room in Mitte</p>
                <strong>
                  Ruhiges & gemütliches Zimmer im Zentrum von Berlin
                </strong>
                <div className="DrawLine"></div>
                <p className="leftSubSectionLastParagraph">
                  1 guest 1 bedroom 2 bed 1 shared bath
                </p>
                <p className="leftSubSectionLastParagraph">
                  Wifi - Kitchen -Washer - Dedicated workshop
                </p>
              </div>

              <div>
                <FaStar
                  style={{
                    display: "inline",
                    color: "red",
                    paddingBottom: "5px",
                    fontSize: "20px",
                  }}
                />
                <strong> 4.75</strong> (200 reviews)
              </div>
            </div>
            <FaHeart className="FaHeart" />
          </div>

          <div className="subSection">
            <img src="https://winstonapart.wpengine.com/wp-content/uploads/2017/02/Winston_Apartments_CollinsSt_153.jpg" />
            <div className="divInsideSubSection">
              <div>
                <p>Private room in Mitte</p>
                <strong>
                  Ruhiges & gemütliches Zimmer im Zentrum von Berlin
                </strong>
                <div className="DrawLine"></div>
                <p className="leftSubSectionLastParagraph">
                  1 guest 1 bedroom 2 bed 1 shared bath
                </p>
                <p className="leftSubSectionLastParagraph">
                  Wifi - Kitchen -Washer - Dedicated workshop
                </p>
              </div>

              <div>
                <FaStar
                  style={{
                    display: "inline",
                    color: "red",
                    paddingBottom: "5px",
                    fontSize: "20px",
                  }}
                />
                <strong> 4.75</strong> (200 reviews)
              </div>
            </div>
            <FaHeart className="FaHeart" />
          </div>

          <div className="subSection">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f8/52/08/lounge.jpg?w=900&h=-1&s=1" />
            <div className="divInsideSubSection">
              <div>
                <p>Private room in Mitte</p>
                <strong>
                  Ruhiges & gemütliches Zimmer im Zentrum von Berlin
                </strong>
                <div className="DrawLine"></div>
                <p className="leftSubSectionLastParagraph">
                  1 guest 1 bedroom 2 bed 1 shared bath
                </p>
                <p className="leftSubSectionLastParagraph">
                  Wifi - Kitchen -Washer - Dedicated workshop
                </p>
              </div>

              <div>
                <FaStar
                  style={{
                    display: "inline",
                    color: "red",
                    paddingBottom: "5px",
                    fontSize: "20px",
                  }}
                />
                <strong> 4.75</strong> (200 reviews)
              </div>
            </div>
            <FaHeart className="FaHeart" />
          </div>
          <div className="subSection">
            <img src="https://cdn.vox-cdn.com/thumbor/MFQLpHmnFrma-qGt9zq8qJ6UU-c=/0x0:1000x668/1200x800/filters:focal(420x254:580x414)/cdn.vox-cdn.com/uploads/chorus_image/image/62947990/285_5thAve2R_Kitchen_straight_on.6.jpg" />
            <div className="divInsideSubSection">
              <div>
                <p>Private room in Mitte</p>
                <strong>
                  Ruhiges & gemütliches Zimmer im Zentrum von Berlin
                </strong>
                <div className="DrawLine"></div>
                <p className="leftSubSectionLastParagraph">
                  1 guest 1 bedroom 2 bed 1 shared bath
                </p>
                <p className="leftSubSectionLastParagraph">
                  Wifi - Kitchen -Washer - Dedicated workshop
                </p>
              </div>

              <div>
                <FaStar
                  style={{
                    display: "inline",
                    color: "red",
                    paddingBottom: "5px",
                    fontSize: "20px",
                  }}
                />
                <strong> 4.75</strong> (200 reviews)
              </div>
            </div>
            <FaHeart className="FaHeart" />
          </div>

          <div className="subSection">
            <img src="https://www.rentnemaboston.com/assets/uploads/transforms/images/boston/Residences/2841/nema-blog-smartest-residence_ac588c0bda35488ba5f8d54cc3dca7fe.jpg" />
            <div className="divInsideSubSection">
              <div>
                <p>Private room in Mitte</p>
                <strong>
                  Ruhiges & gemütliches Zimmer im Zentrum von Berlin
                </strong>
                <div className="DrawLine"></div>
                <p className="leftSubSectionLastParagraph">
                  1 guest 1 bedroom 2 bed 1 shared bath
                </p>
                <p className="leftSubSectionLastParagraph">
                  Wifi - Kitchen -Washer - Dedicated workshop
                </p>
              </div>

              <div>
                <FaStar
                  style={{
                    display: "inline",
                    color: "red",
                    paddingBottom: "5px",
                    fontSize: "20px",
                  }}
                />
                <strong> 4.75</strong> (200 reviews)
              </div>
            </div>
            <FaHeart className="FaHeart" />
          </div>
        </section>
        <section className="rightSection">
          <img src={image} alt="" />
        </section>
      </main>
    </div>
  );
};

export default Houses;
