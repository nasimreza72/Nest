import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export const Location = ()=>{
    const containerStyle = {
        width: "1000px",
        height: '400px'
    };
      
    const center = {
        lat: -3.745,
        lng: -38.523
    };
    return(
        <div className="border-b-2 mb-10 text-left">
            <h1 className=' text-2xl mb-3'>Where Yo'll be</h1>
            <div className="mb-10">
                <LoadScript googleMapsApiKey="AIzaSyB5mlMUDFJUY_FYU6-8ez0eqtrSdrxh298">
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
                    />
                </LoadScript>
            </div>
            <div className=' mb-10'>
                <h3 className=' text-lg mb-3'>Berlin, Germany</h3>
                <p className=' mb-3'>We have an eastern and western German, partly international neighbourhood. 
                    Our neighborhood and our neighbors are friendly, helpful and also remarkably quiet, although many families with children live here.
                </p>
                <a className="underline" href='#'>Show More</a>
            </div>
        </div>
    )
}

export default Location;