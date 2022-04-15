import "./style.css";
import { FaAngleDown, FaFilter, FaStar, FaHeart } from "react-icons/fa";
import image from './map.png'

const Houses = () => {
  return (
    <div className="Houses">
      <nav>
        <div className="wrapper">
          <div className="subWrapper">
            <p>Price </p>
            <FaAngleDown style={{ display: "inline" }} />
          </div>
          <div className="subWrapper">
            <p>Type of place </p>
            <FaAngleDown style={{ display: "inline" }} />
          </div>
          <div className="subWrapperRightBorder"></div>
        </div>

        <div className="wrapper">
          <div className="subWrapper">
            <p>Free cancellation</p>
          </div>
          <div className="subWrapper">
            <p>Wifi</p>
          </div>
          <div className="subWrapper">
            <p>Kitchen</p>
          </div>
          <div className="subWrapper">
            <p>Washer</p>
          </div>
          <div className="subWrapper">
            <p>Self check-in</p>
          </div>
          <div className="subWrapper">
            <p>Dedicated workshop</p>
          </div>
          <div className="subWrapper">
            <p>Free parking</p>
          </div>
          <div className="subWrapper">
            <p>Dryer</p>
          </div>
          <div className="subWrapper">
            <p>Pool</p>
          </div>
          <div className="subWrapper">
            <p>Air conditioning</p>
          </div>
          <div className="subWrapper">
            <p>Iron</p>
          </div>
          <div className="subWrapper">
            <p>Gym</p>
          </div>
          <div className="subWrapper">
            <FaFilter style={{ display: "inline", marginRight: 10 }} />
            <p>Filters</p>
          </div>
        </div>
      </nav>

      <hr />

      <main>
        <section className="leftSection">
          <div className="subSection1">
            <p>300+ stays in map area</p> <br />
            <p>
              Support refugees fleeing Ukraine by donating throuh Airbnb.org.{" "}
              <u>Donate now</u>{" "}
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

            <div className="heartIcon">
              <FaHeart
                style={{ fontSize: "25px", position: "absolute", right: "0px" }}
              />
            </div>
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
            <div className="heartIcon">
              <FaHeart
                style={{ fontSize: "25px", position: "absolute", right: "0px" }}
              />
            </div>
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
            <div className="heartIcon">
              <FaHeart
                style={{ fontSize: "25px", position: "absolute", right: "0px" }}
              />
            </div>
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
            <div className="heartIcon">
              <FaHeart
                style={{ fontSize: "25px", position: "absolute", right: "0px" }}
              />
            </div>
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
            <div className="heartIcon">
              <FaHeart
                style={{ fontSize: "25px", position: "absolute", right: "0px" }}
              />
            </div>
          </div>
        </section>
        <section className="rightSection">
          <img
            src={image}
            alt=""
          />
        </section>
      </main>
    </div>
  );
};

export default Houses;
