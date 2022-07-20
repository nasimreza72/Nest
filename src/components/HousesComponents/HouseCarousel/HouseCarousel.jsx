import { useContext, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { houseContext } from "../../../Context/HouseContext.jsx";

const HouseCarousel = ({ house }) => {
  const { setActiveHouseId, activeHouseId } = useContext(houseContext);


  let navigate = useNavigate();

  const houseClickHandler = () => {
    console.log('house._id :>> ', house._id);
    setActiveHouseId(house._id);
    navigate("/House");
  };

  const objToArray = house?.amenities && Object.entries(house.amenities);
  const filterAmenities = objToArray && objToArray.filter((item) => item[1] === true);


  return (
    <div className="subSection" onClick={houseClickHandler}>
      <Carousel>
        {house.images.map((image, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.REACT_APP_URL}/api/house/getImage/${house._id}/${index}`}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="divInsideSubSection">
        <h6>{house.typeOfPlace}</h6>
        <div className="DrawLine"></div>
        <p>{house.title}</p>
        <p className="description">{house.description}</p>
        <p> <span className="price">Price:</span> {house.price === 0 ? "Free" : "€" +house.price + " monthly."} </p>
        <p>
          <span className="guests">Guest: </span>
          Adult: {house.guests.adult}, Kids: {house.guests.kids}, Beds:{" "}
          {house.guests.beds}, Bedrooms: {house.guests.bedrooms}
        </p>
        <p>
          <span className="amenities">Amenities: </span>
          {filterAmenities &&
            filterAmenities.map((item) => <span>{item[0]} </span>)}
        </p>

        <p>
          <FaStar className="FaStar" />
          <span className="review">{Math.round(Math.random()*2)+3}</span> ({Math.round(Math.random()*20)} reviews)
        </p>
        <FaHeart className="FaHeart" />
      </div>
    </div>
  );
};

export default HouseCarousel;
