import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function MapContainer() {

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    return (
        <>
        <LoadScript googleMapsApiKey='AIzaSyAUlvoB-IWOAOF78ucW4T17jo_4femUS0w'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            />
        </LoadScript>
        </>
    )
}

export default MapContainer;