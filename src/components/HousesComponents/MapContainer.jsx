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
  
  const onSelect = (item) => {
    setSelected(item);
  };


  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter} >

        

        {activeHouses.map((house) => {
          const location = {lat:Number(house.address.lat), lng:Number(house.address.long)}
          return (            
            <Marker
              icon={"https://img.icons8.com/flat-round/45/home--v1.png"}
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
            <div style={{width: "180px", paddingRight: "12px", overflow: "scroll"}}>
              <img 
                style={{borderRadius: "5px", width: "170px", maxHeight: "150px", marginBottom: "5px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1.5px 3px, rgba(0, 0, 0, 0.23) 0px 1.5px 3px"}}
                src={`${process.env.REACT_APP_URL}/api/house/getImage/${selected._id}/0`}alt=""  />
              <h6>{selected.title}</h6>
              <p>{selected.description}</p>
            </div>
          </InfoWindow>
          }
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
