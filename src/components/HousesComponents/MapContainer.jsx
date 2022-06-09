import React from "react";
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
    lat: 41.3851,
    lng: 2.1734,
  };
  const locations = [
    {
      name: "Location 1",
      img: "https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?k=20&m=1165384568&s=612x612&w=0&h=CAnAr3uJtmkr0IQ2EPgm0IBoo8oCm-FEYEtyor8X_9I=",
      location: {
        lat: 41.3954,
        lng: 2.162,
      },
    },
    {
      name: "Location 2",
      img: "https://images.unsplash.com/photo-1558981082-c7d43331cd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdHN8ZW58MHx8MHx8&w=1000&q=80",
      location: {
        lat: 41.3917,
        lng: 2.1649,
      },
    },
    {
      name: "Location 3",
      img: "https://images.unsplash.com/photo-1558981082-c7d43331cd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdHN8ZW58MHx8MHx8&w=1000&q=80",
      location: {
        lat: 41.3773,
        lng: 2.1585,
      },
    },
    {
      name: "Location 4",
      img: "https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?k=20&m=1165384568&s=612x612&w=0&h=CAnAr3uJtmkr0IQ2EPgm0IBoo8oCm-FEYEtyor8X_9I=",
      location: {
        lat: 41.3797,
        lng: 2.1682,
      },
    },
    {
      name: "Location 5",
      img: "https://images.unsplash.com/photo-1558981082-c7d43331cd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdHN8ZW58MHx8MHx8&w=1000&q=80",
      location: {
        lat: 41.4055,
        lng: 2.1915,
      },
    },
  ];

  const onSelect = (item) => {
    setSelected(item);
  };

  return (
    <LoadScript 
    // googleMapsApiKey="AIzaSyBIo2VwqE2BYnrvSjtIsRhHa7lNTwBWx3I"
    >
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
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
            <img src={selected.img }alt="" width={100} />
            <p>{selected.name}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
