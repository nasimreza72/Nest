import { useState, useContext } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { housesContext } from "../../Context/HousesContext.jsx";

const MapContainer = () => {
  const {activeCity, activeHouses} = useContext(housesContext);
  const [selected, setSelected] = useState(null);

  const mapStyles = {
    height: "87vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: Number(activeCity.lat),
    lng: Number(activeCity.lng)
  };

  console.log("selected  :>>>",selected);

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
  
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter}>
        {activeHouses.map((house) => {
          const location = {lat:Number(house.address.lat), lng:Number(house.address.long)}
          return (
            <Marker
              //icon={"https://cdn-icons-png.flaticon.com/512/25/25694.png"}
              key={house._id}
              position={location}
              onClick={() => onSelect(house)}
            />
          );
        })}
        
        {
          selected &&
          <InfoWindow
          position={{lat:Number(selected?.address?.lat), lng:Number(selected?.address?.long)}}
          clickable={true}
          onCloseClick={() => setSelected(null)}
          >
            <div style={{paddingRight: "12px"}}>
              <img 
                style={{borderRadius: "5px", width: "150px", marginBottom: "5px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1.5px 3px, rgba(0, 0, 0, 0.23) 0px 1.5px 3px"}}
                src={`${process.env.REACT_APP_URL}/api/house/getImage/${selected._id}/0`}alt=""  />
                {/* src="https://a0.muscache.com/im/pictures/miso/Hosting-39529039/original/6eca36e1-3ce9-499c-8096-2bfb2f66f5f8.jpeg?im_w=720" alt=""  />  */}
              <h6>{selected.title}</h6>
            </div>
          </InfoWindow>
          }
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
