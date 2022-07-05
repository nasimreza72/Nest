import {useContext} from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { houseContext } from "../../../Context/HouseContext.jsx"

const HouseCarousel = ({house})=>{
    console.log("house>>>>", house);
    const {setHouse} = useContext(houseContext);

    let navigate = useNavigate();

    const houseClickHandler = ()=>{
        setHouse(house);
        navigate("/House", { replace: true })
    }
    return(
        <div className="subSection" onClick={houseClickHandler}>

            <Carousel>
                {
                    house.images.map((image, index)=>
                    <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={`${process.env.REACT_APP_URL}/api/house/getImage/${house._id}/${index}`}
                          alt="First slide"
                        />
                    </Carousel.Item>)
                }
              
              {/* <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.REACT_APP_URL}/api/house/getImage/${house._id}/1`}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.REACT_APP_URL}/api/house/getImage/${house._id}/2`}
                  alt="Third slide"
                />
              </Carousel.Item> */}
            </Carousel>

            <div className="divInsideSubSection">
              <div>
                <p>Private room in Mitte</p>
                <h6>
                  Ruhiges & gemütliches Zimmer im Zentrum von Berlin
                </h6>
                <div className="DrawLine"></div>
                <p className="leftSubSectionLastParagraph">
                  1 guest 1 bedroom 2 bed 1 shared bath
                </p>
                <p className="leftSubSectionLastParagraph">
                  Wifi - Kitchen - Washer - Dedicated workshop
                </p>
              </div>

              <div>
                <FaStar className="FaStar" />
                <strong> 4.75</strong> (200 reviews)
              </div>
            </div>
            <FaHeart className="FaHeart" />
          </div>
    )
}

export default HouseCarousel;