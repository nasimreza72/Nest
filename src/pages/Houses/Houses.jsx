import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDown, FaFilter } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import Filter from "../../components/HousesComponents/Filter.jsx";
import MapContainer from "../../components/HousesComponents/MapContainer.jsx";
import HouseCarousel from "../../components/HousesComponents/HouseCarousel/HouseCarousel.jsx";
import { housesContext } from "../../Context/HousesContext.jsx";
import HousesPagination from "../../components/HousesComponents/Pagination/Pagination.jsx";
import axios from "axios";

const Houses = () => {
  const [filter, setFilter] = useState(false);
  const {
    setActiveHouses,
    setHouseCount,
    houseCount,
    activeCity,
    activeHouses,
    getHousesByCity,
    pageNumber,
  } = useContext(housesContext);
  const [selectedPlace, setSelectedPlace] = useState("");

  useEffect(() => {
    getHousesByCity();
  }, [pageNumber]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_URL}/api/house/getPrivateRoom/${activeCity.name}/${selectedPlace}`
  //     )
  //     .then((res) => {
  //       console.log("res.data :>> ", res.data);
  //       setActiveHouses(res.data);
  //       setHouseCount(res.data.length);
  //     })
  //     .catch((err) => console.log("err :>> ", err));
  // }, [selectedPlace]);

  console.log('houseCount :>> ', houseCount);


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
          <div
            className="subWrapper mediaScreenMax690"
            onClick={(e) => setSelectedPlace("Shared Room")}
          >
            <p>Shared room</p>
          </div>
          <div
            className="subWrapper mediaScreenMax690"
            onClick={(e) => setSelectedPlace("Private Room")}
          >
            <p>Private room</p>
          </div>
          <div
            className="subWrapper mediaScreenMax885"
            onClick={(e) => setSelectedPlace("Apartment")}>
            <p>Apartment</p>
          </div>
          <div className="subWrapper mediaScreenMax885"
          onClick={ (e) => setSelectedPlace("House")}>
            <p>House</p>
          </div>
          <div className="subWrapper mediaScreenMax1200"
          onClick={ (e) => setSelectedPlace("Attic")}>
            <p>Attic</p>
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
            <p>Television</p>
          </div>
          <div className="subWrapper mediaScreenMax1650">
            <p>Refrigerator</p>
          </div>
          <div className="subWrapper mediaScreenMax1750">
            <p>Tableware</p>
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
        <section className="leftSection">
          {activeHouses.map((house) => (
            <HouseCarousel house={house} />
          ))}
          <HousesPagination />
        </section>

        <section className="rightSection">
          <MapContainer />
        </section>
      </main>
    </div>
  );
};

export default Houses;
