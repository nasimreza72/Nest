import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { houseContext } from "../../../Context/HouseContext.jsx";

const HouseCarousel = ({ house }) => {
  const { setHouse } = useContext(houseContext);

  let navigate = useNavigate();

  const houseClickHandler = () => {
    setHouse(house);
    navigate("/House");
  };

  const objToArray = house?.amenities && Object.entries(house.amenities);
  const filterAmenities =
    objToArray && objToArray.filter((item) => item[1] === true);


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
        <div>
          <p>{house.title}</p>
          <h6>{house.description}</h6>
          <div className="DrawLine"></div>
          <p className="leftSubSectionLastParagraph">
            <strong>Guest: </strong>
            Adult: {house.guests.adult},
            Kids: {house.guests.kids}, 
            Beds: {house.guests.beds},
            Bedrooms: {house.guests.bedrooms}
          </p>
          <p className="leftSubSectionLastParagraph">
          <strong>Amenities: </strong>
          {filterAmenities && filterAmenities.map((item) => ( <span>{item[0]} </span> ))}
          </p>
        </div>

        <div>
          <FaStar className="FaStar" />
          <strong> 4.75</strong> (200 reviews)
        </div>
      </div>
      <FaHeart className="FaHeart" />
    </div>
  );
};

export default HouseCarousel;
