import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MapContainer({ lat, lng, status}) {

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const currentLocation = {
        lat: lat,
        lng: lng
    };

    return (
        <>
        <LoadScript googleMapsApiKey='AIzaSyAUlvoB-IWOAOF78ucW4T17jo_4femUS0w'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={currentLocation}
            />
        </LoadScript>
        </>
    )
}

export default MapContainer;