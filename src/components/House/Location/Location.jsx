import { useState, useContext } from 'react'
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';
import { houseContext } from '../../../Context/HouseContext.jsx';
// const ScriptLoaded = require("../../docs/ScriptLoaded").default;

import "./Location.scss";

export const Location = ()=>{
    const {house} = useContext(houseContext);
    const [showInfo, setShowInfo]=useState(false);

    const containerStyle = {
      width: "100%",
      height: '400px'
    };
      
    const center = {
      lat: house?.address?.lat,
      lng: house?.address?.long
    };

    const position = {
      lat: house?.address?.lat,
      lng: house?.address?.long
    }
      
    const onLoad = marker => {
      console.log('marker: ', marker)
    }

    const options = { closeBoxURL: '', enableEventPropagation: true };
    // const divStyle = {
    //     background: `white`,
    //     border: `1px solid #ccc`,
    //     padding: 15
    //   }
    return(
        <div className="location-container" id="location-container">
            <h1>Where Yo'll be</h1>
            <div className="map-container">
                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
                    >
                    <Marker
                        // icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
                        onClick={()=>setShowInfo(!showInfo)}
                        onLoad={onLoad}
                        position={position}
                    />

                    { showInfo && <InfoBox
                          onLoad={onLoad}
                          options={options}
                          position={center}
                        >
                          <div style={{ backgroundColor: 'white', padding: 12 }}>
                            <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                              Hello, World!
                            </div>
                          </div>
                    </InfoBox>}

                     {/* <InfoWindow
                          onLoad={onLoad}
                          position={position}
                        >
                          <div style={divStyle}>
                            <h1>InfoWindow</h1>
                          </div>
                    </InfoWindow> */}

                    </GoogleMap>
                </LoadScript>
            </div>
            <div className='text'>
                <h3>Berlin, Germany</h3>
                <p>We have an eastern and western German, partly international neighbourhood. 
                    Our neighborhood and our neighbors are friendly, helpful and also remarkably quiet, although many families with children live here.
                </p>
                <a href='#'>Show More</a>
            </div>
        </div>
    )
}

export default Location;