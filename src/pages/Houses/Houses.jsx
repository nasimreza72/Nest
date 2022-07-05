import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDown, FaFilter } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import Filter from "../../components/HousesComponents/Filter.jsx";
import MapContainer from "../../components/HousesComponents/MapContainer.jsx";
import HouseCarousel from "../../components/HousesComponents/HouseCarousel/HouseCarousel.jsx";
import { housesContext } from "../../Context/HousesContext.jsx";

const Houses = () => {
  const [filter, setFilter] = useState(false);
  const {activeHouses, getHousesByCity} = useContext(housesContext);

  useEffect(()=>{
    getHousesByCity();
  },[])
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
            <p>Apartment</p>
          </div>
          <div className="subWrapper mediaScreenMax885">
            <p>House</p>
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
        {/* ---------- Beginning of LeftSection -------------*/}

        <section className="leftSection">
          <div className="subSectionInfo">
            <p>(add how many places available in map area) stays in map area</p>
            <p style={{ color: "gray" }}>
              Select multiple filter and number of rooms to see the fastest
              result.
            </p>
            <p>
              Support refugees fleeing Ukraine by giving them a home through our
              website.
            </p>
          </div>
          { activeHouses.map(house=><HouseCarousel house={house}/>)}
          
        </section>

        {/* ---------- Beginning of RightSection Map part-------------*/}

        <section className="rightSection">
          <MapContainer />
        </section>
      </main>
    </div>
  );
};

export default Houses;
