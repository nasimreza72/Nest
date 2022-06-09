// import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleDown, FaFilter, FaStar, FaHeart } from "react-icons/fa";
import { useState } from "react";
import Filter from "./HousesComponents/Filter.jsx";
import { Carousel } from "react-bootstrap";
import MapContainer from "./HousesComponents/MapContainer.jsx";



const Houses = () => {
  const [filter, setFilter] = useState(false);


  return (
    <div className="Houses">
      <nav>
        <div className="NavWrapper">
          <div className="subWrapper mediaScreenMax475">
            <p>Price </p>
            <FaAngleDown style={{ display: "inline" }} />
          </div>
          <div className="subWrapper">
            <p>Free housing</p>
          </div>
          <div className="subWrapperRightBorder"></div>
        </div>

        <div className="NavWrapper">
          <div className="subWrapper mediaScreenMax690">
            <p>Shared room</p>
          </div>
          <div className="subWrapper mediaScreenMax690">
            <p>Private room</p>
          </div>
          <div className="subWrapper mediaScreenMax885">
            <p>Entire place</p>
          </div>
          <div className="subWrapper mediaScreenMax885">
            <p>Empty</p>
          </div>
          <div className="subWrapper mediaScreenMax1200">
            <p>Male</p>
          </div>
          <div className="subWrapper mediaScreenMax1200">
            <p>Female</p>
          </div>
          <div className="subWrapper mediaScreenMax1450">
            <p>Kitchen</p>
          </div>
          <div className="subWrapper mediaScreenMax1450">
            <p>Wifi</p>
          </div>
          <div className="subWrapper mediaScreenMax1650">
            <p>empty</p>
          </div>
          <div className="subWrapper mediaScreenMax1650">
            <p>empty</p>
          </div>
          <div className="subWrapper mediaScreenMax1750">
            <p>empty</p>
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

      {filter && <Filter setFilter={setFilter} />}

      <main>

      {/* ---------- Beginning of LeftSection -------------*/}

        <section className="leftSection">
          <div className="subSectionInfo">
            <p>
              (add how many places available in map area) stays in map area
            </p>
            <p style={{ color: "gray" }}>
              Select multiple filter and number of rooms to see the fastest
              result.
            </p>
            <p>
              Support refugees fleeing Ukraine by giving them a home through our
              website.
            </p>
          </div>

          <div className="subSection">
            <Carousel >
              <Carousel.Item >
                <img
                  // className="d-block w-100"
                  src="https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?k=20&m=1165384568&s=612x612&w=0&h=CAnAr3uJtmkr0IQ2EPgm0IBoo8oCm-FEYEtyor8X_9I="
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/photos/portland-oregon-usa-condos-picture-id1349455712?b=1&k=20&m=1349455712&s=170667a&w=0&h=aAfwNY2ztNxyOenyOHuvhRUkaq1A7eZJg23S4SsZpug="
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1558981082-c7d43331cd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdHN8ZW58MHx8MHx8&w=1000&q=80"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

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
                <FaStar className="FaStar" />
                <strong> 4.75</strong> (200 reviews)
              </div>
            </div>
            <FaHeart className="FaHeart" />
          </div>


          <div className="subSection">
            <Carousel >
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?k=20&m=1165384568&s=612x612&w=0&h=CAnAr3uJtmkr0IQ2EPgm0IBoo8oCm-FEYEtyor8X_9I="
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/photos/portland-oregon-usa-condos-picture-id1349455712?b=1&k=20&m=1349455712&s=170667a&w=0&h=aAfwNY2ztNxyOenyOHuvhRUkaq1A7eZJg23S4SsZpug="
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1558981082-c7d43331cd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdHN8ZW58MHx8MHx8&w=1000&q=80"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

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
                <FaStar className="FaStar" />
                <strong> 4.75</strong> (200 reviews)
              </div>
            </div>
            <FaHeart className="FaHeart" />
          </div>


          <div className="subSection">
            <Carousel >
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?k=20&m=1165384568&s=612x612&w=0&h=CAnAr3uJtmkr0IQ2EPgm0IBoo8oCm-FEYEtyor8X_9I="
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/photos/portland-oregon-usa-condos-picture-id1349455712?b=1&k=20&m=1349455712&s=170667a&w=0&h=aAfwNY2ztNxyOenyOHuvhRUkaq1A7eZJg23S4SsZpug="
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1558981082-c7d43331cd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdHN8ZW58MHx8MHx8&w=1000&q=80"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

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
                <FaStar className="FaStar" />
                <strong> 4.75</strong> (200 reviews)
              </div>
            </div>
            <FaHeart className="FaHeart" />
          </div>

         
        </section>

       {/* ---------- Beginning of RightSection Map part-------------*/}

        <section className="rightSection" >
          {/* <img src={image} alt="" /> */}
         <MapContainer />
    
        </section>

      </main>
    </div>
  );
};

export default Houses;
