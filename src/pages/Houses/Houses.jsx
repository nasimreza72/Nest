import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDown, FaFilter } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import Filter from "../../components/HousesComponents/Filter.jsx";
import MapContainer from "../../components/HousesComponents/MapContainer.jsx";
import HouseCarousel from "../../components/HousesComponents/HouseCarousel/HouseCarousel.jsx";
import { housesContext } from "../../Context/HousesContext.jsx";
import HousesPagination from "../../components/HousesComponents/Pagination/Pagination.jsx";

const Houses = () => {
  const [filter, setFilter] = useState(false);
  const [helper, setHelper] = useState(0);
  const [price, setPrice] = useState(false);
  const {
    activeHouses,
    getHousesByCity,
    pageNumber,
    setTypeOfPlace,
    typeOfPlace,
    setHousePrice,
    housePrice

  } = useContext(housesContext);

  useEffect(() => {
    getHousesByCity();
    console.log("typeOfPlace :>> ", typeOfPlace);
    console.log("housePrice :>> ", housePrice);
  }, [pageNumber, typeOfPlace, housePrice]);

  const filterByType = (selectedPlace) => {
    setTypeOfPlace(selectedPlace)
  };

  return (
    <div className="Houses">
      <nav>
        <div className="NavWrapper">
          <div className="subWrapper mediaScreenMax475">
            <p>Price </p>
            <FaAngleDown style={{ display: "inline" }} />
          </div>
          <div className="subWrapper"
          style={price? {border: "1.5px solid black"} : {opacity:1}}
          onClick={() => {
            setHousePrice(0);
            if(price){setPrice(false); setHousePrice(null)}
            else{setPrice(true)}
            }}
          >
            <p>Free housing</p>
          </div>
          <div className="subWrapperRightBorder"></div>
        </div>

        <div className="NavWrapper">
          <div
            className="subWrapper mediaScreenMax690"
            style={helper === 1 ? {border: "1.5px solid black"} : {opacity:1}}
            onClick={(e) => {filterByType("Shared Room"); setHelper(1)}}
          >
            <p>Shared room</p>
          </div>
          <div
            className="subWrapper mediaScreenMax690"
            style={helper === 2 ? {border: "1.5px solid black"} : {opacity:1}}
            onClick={(e) => {filterByType("Private Room"); setHelper(2)}}
          >
            <p>Private room</p>
          </div>
          <div
            className="subWrapper mediaScreenMax885"
            style={helper === 3 ? {border: "1.5px solid black"} : {opacity:1}}
            onClick={(e) => {filterByType("Apartment"); setHelper(3)}}
          >
            <p>Apartment</p>
          </div>
          <div
            className="subWrapper mediaScreenMax885"
            style={helper === 4 ? {border: "1.5px solid black"} : {opacity:1}}
            onClick={(e) => {filterByType("House"); setHelper(4)}}
          >
            <p>House</p>
          </div>
          <div
            className="subWrapper mediaScreenMax1200"
            style={helper === 5 ? {border: "1.5px solid black"} : {opacity:1}}
            onClick={(e) => {filterByType("Attic"); setHelper(5)}}
          >
            <p>Attic</p>
          </div>
          <div className="subWrapper mediaScreenMax1200">
            <p>Kitchen</p>
          </div>
          <div className="subWrapper mediaScreenMax1450">
            <p>Tableware</p>
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
            <p>Workspace</p>
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
