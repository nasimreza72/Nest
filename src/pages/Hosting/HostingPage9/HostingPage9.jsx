import "./hostingPage9.scss";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { housesContext } from "../../../Context/HousesContext.jsx";
import axios from "axios";

export default function HostingPage9() {
  let navigate = useNavigate();
  const { houseId } = useContext(housesContext);
  const [hostData, setHostData] = useState(null);

  axios.get(
      `http://localhost:7777/api/house/getAllHostInfo/${houseId}`
    )
    .then((res) => {
      setHostData(res.data);
    })
    .catch((err) => console.log("err :>> ", err));

  const objToArray = hostData && Object.entries(hostData.amenities);
  const filterAmenities =
    objToArray && objToArray.filter((item) => item[1] === true);

  return (
    <div className="hostingPage9">
      <div className="mainLeft">
        <h1>Check out your listing!</h1>
        <p>
          Once you save, we'll ask yo to confirm a few details before you can
          publish.
        </p>
      </div>
      <div className="mainRight">
        <div className="subMainRight">
          <div className="subMainRightDiv">
            <h4>Summary of all information's</h4>
            <div className="allInfoList">
              {hostData && (
                <div>
                  <p>
                    <strong>Type of place: </strong>
                    {hostData.typeOfPlace}
                  </p>
                  <hr />
                  <p>
                    <strong>Title: </strong>
                    {hostData.title}
                  </p>
                  <hr />
                  <p>
                    <strong>Description: </strong>
                    {hostData.description}
                  </p>
                  <hr />
                  <p>
                    <strong>Address: </strong>
                    {hostData.address}
                  </p>
                  <hr />
                  <p>
                    <strong>Price: </strong>
                    {hostData.price} euro
                  </p>
                  <hr />
                  <p>
                    <strong>Guests: </strong>
                    Adult: {hostData.guests.adult}, Kids:
                    {hostData.guests.kids}, Beds: {hostData.guests.beds},
                    Bedrooms: {hostData.guests.bedrooms}.
                  </p>
                  <hr />
                  <p>
                    <strong>Total uploaded images: </strong>
                    {hostData.images.length}
                  </p>
                  <hr />
                  <p>
                    <strong>Amenities: </strong>
                    {filterAmenities.map((item) => (
                      <span>{item[0]}, </span>
                    ))}
                  </p>
                  <hr />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="back">
              <button
                onClick={() => navigate("../hostingPage8", { replace: true })}
              >
                <u>Back</u>
              </button>
            </div>
            <div className="next" onClick={ ()=> {
              alert("Congratulation!! You have successfully hosted your place!!!");
              navigate("/", { replace: true });
              
              }}>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
