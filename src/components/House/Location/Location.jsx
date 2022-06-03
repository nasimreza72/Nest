import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import "./Location.scss";

export const Location = ()=>{
    const containerStyle = {
        width: "100%",
        height: '400px'
    };
      
    const center = {
        lat: -3.745,
        lng: -38.523
    };
    return(
        <div className="location-container">
            <h1>Where Yo'll be</h1>
            <div className="map-container">
                <LoadScript googleMapsApiKey="AIzaSyB5mlMUDFJUY_FYU6-8ez0eqtrSdrxh298">
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
                    />
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