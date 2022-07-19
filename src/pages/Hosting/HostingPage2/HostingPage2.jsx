import "./hostingPage2.scss";
import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MapContainer from "../../../components/HousesComponents/MapContainer.jsx";
import { housesContext } from "../../../Context/HousesContext.jsx";
import { useState, useRef, useContext } from "react";
import Geocode from "react-geocode";
import ErrorMessage from "../../../components/HousesComponents/ErrorMessage/ErrorMessage.jsx";

export default function HostingPage2(props) {
  const [showMessage, setShowMessage] = useState(false);
  const [helper, setHelper] = useState(false);
  let addressObject = {};
  const [showAddressForm, setShowAddressForm] = useState(false);

  let navigate = useNavigate();
  const addressRef = useRef();
  const { updateHouse } = useContext(housesContext);

  // Added manually because google VM it doesn't work without https

  // function addAddress() {
  //   Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
  //   Geocode.setLanguage("en");
  //   Geocode.setLocationType("ROOFTOP");
  //   Geocode.enableDebug();

  //   navigator.geolocation.getCurrentPosition((position) => {
  //     Geocode.fromLatLng(position.coords.latitude, position.coords.longitude)
  //     Geocode.fromLatLng(52.559840, 13.383110)
  //       .then((response) => {
  //         const address = response.results[0].formatted_address;
  //         addressRef.current.value = address;
  //         setHelper(true)
  //       })
  //       .catch((err) => console.log(err));
  //   })
  // }

  function addAddress() {
    setHelper(true)
    addressRef.current.value = "Stockholmer strasse 33, 13359 Berlin"
  }

  const next = () => {
    let updatedAddress = addressRef.current.value;
    
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
    Geocode.fromAddress(addressRef.current.value)
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log("Current location lat & lng -->", lat, lng);

        Geocode.fromLatLng(lat, lng).then((response) => {
          let city, country;
          for ( let i = 0; i < response.results[0].address_components.length; i++) {
            for ( let j = 0; j < response.results[0].address_components[i].types.length; j++) {
              // eslint-disable-next-line default-case
              switch (response.results[0].address_components[i].types[j]) {
                case "locality":
                  city = response.results[0].address_components[i].long_name;
                  break;
                case "country":
                  country = response.results[0].address_components[i].long_name;
                  break;
              }
            }
          }

          addressObject = {
            address: {
              city,
              country,
              lat: lat,
              long: lng,
              formattedAddress: updatedAddress
            }
          }

          updateHouse(addressObject);
          console.log("addressObject :>> ", addressObject);
          navigate("../hostingPage3", { replace: true });
        })
      })
      .catch((error) => {
        setShowMessage(true)
        console.error("Address error >>", error);
      })
  }

  return (
    <div className="hostingPage2">
      <div className="mainLeft">
        <h1>Where is your place located?</h1>
      </div>

      <div className="mainRight">
        <div className="subMainRight">
          <MapContainer />
          <div className="subMainRightDiv">
            <FaMapMarkerAlt />

            <input
              onChange={() => setHelper(true)}
              ref={addressRef}
              type="text"
              placeholder="Enter your address"
            />

            <div className="myCurrentLocation">
              <FaLocationArrow />
              <button onClick={addAddress}> Current location</button>
              <button
                className="addAddressManually"
                onClick={() => setShowAddressForm(true)}
              >
                Add manually
              </button>

              {showAddressForm && (
                <div className="showAddressForm">
                  <div className="subShowAddressForm">
                    <button
                      className="closeButton"
                      onClick={() => setShowAddressForm(false)}
                    >
                      x
                    </button>
                    <br />
                    <input type="text" placeholder="Street" /> <br />
                    <input
                      type="text"
                      placeholder="Apt, house, etc. (Optional)"
                    />
                    <br />
                    <input type="text" placeholder="City" /> <br />
                    <input type="text" placeholder="Zip code" /> <br />
                    <input type="text" placeholder="Country / Region" /> <br />
                    <button className="confirmButton">Confirm address</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="subMainRightBottom">
          <div className="bottomPart">
            <div className="back">
              <button
                onClick={() => navigate("../hostingPage1", { replace: true })}
              >
                <u>Back</u>
              </button>
            </div>
            <div className="next"
            style={ helper ? { opacity: 1 } : { opacity: ".25", zIndex: -1 } }
            >
              <button onClick={next}>Next</button>
            </div>
          </div>
        </div>
      </div>
      {showMessage && <ErrorMessage setShowMessage={setShowMessage} message={"Please add the valid address!"} />}

    </div>
  )
}
