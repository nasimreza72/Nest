import React from "react";
// import Geocode from "react-geocode";
import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const MapContainer = () => {
  const [selected, setSelected] = useState({});

  const mapStyles = {
    height: "87vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 52.52,
    lng: 13.405,
  };
  const locations = [
    {
      name: "Location 1",
      img: "https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?k=20&m=1165384568&s=612x612&w=0&h=CAnAr3uJtmkr0IQ2EPgm0IBoo8oCm-FEYEtyor8X_9I=",
      location: {
        lat: 52.4954,
        lng: 13.462,
      },
    },
    {
      name: "Location 2",
      img: "https://images.unsplash.com/photo-1558981082-c7d43331cd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdHN8ZW58MHx8MHx8&w=1000&q=80",
      location: {
        lat: 52.4754,
        lng: 13.412,
      },
    },
    {
      name: "Location 3",
      img: "https://images.unsplash.com/photo-1558981082-c7d43331cd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdHN8ZW58MHx8MHx8&w=1000&q=80",
      location: {
        lat: 52.4914,
        lng: 13.362,
      },
    },
    {
      name: "Location 4",
      img: "https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?k=20&m=1165384568&s=612x612&w=0&h=CAnAr3uJtmkr0IQ2EPgm0IBoo8oCm-FEYEtyor8X_9I=",
      location: {
        lat: 52.5297,
        lng: 13.2882,
      },
    },
    {
      name: "Location 5",
      img: "https://images.unsplash.com/photo-1558981082-c7d43331cd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdHN8ZW58MHx8MHx8&w=1000&q=80",
      location: {
        lat: 52.5055,
        lng: 13.3915,
      },
    },
  ];

  const onSelect = (item) => {
    setSelected(item);
  };

  /////// GEO CODE

  // Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

  // Geocode.setLanguage("en");
  // Geocode.setLocationType("ROOFTOP");
  // Geocode.enableDebug();

  // navigator.geolocation.getCurrentPosition((position) => {
  //   Geocode.fromLatLng(
  //     position.coords.latitude,
  //     position.coords.longitude
  //   ).then(
  //     (response) => {
  //       const address = response.results[0].formatted_address;
  //       console.log("Current location address-->",address);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // });

  // Get latitude & longitude from address.

  // Geocode.fromAddress("Soldiner Str. 36, 13359 Berlin, Germany").then(
  //   (response) => {
  //     const { lat, lng } = response.results[0].geometry.location;
  //     console.log("Currenr location lat & lng -->", lat, lng);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  // );

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter}>
        {locations.map((item) => {
          return (
            <Marker
              // icon={"https://cdn-icons-png.flaticon.com/512/25/25694.png"}
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            {/* <p>{selected.name}</p> */}
            <div>
              <img src={selected.img} alt="" width={100} />
              <p>{selected.name}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
