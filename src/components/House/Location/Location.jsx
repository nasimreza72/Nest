import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoBox, InfoWindow } from '@react-google-maps/api';
// const ScriptLoaded = require("../../docs/ScriptLoaded").default;
import "./Location.scss";

export const Location = ()=>{

    const [showInfo, setShowInfo]=useState(false);

    const containerStyle = {
        width: "100%",
        height: '400px'
    };
      
    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const position = {
        lat: -3.745,
        lng: -38.523
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
        <div className="location-container">
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