import React, { useState } from 'react';

function GetLocation() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [address, setAddress] = useState(null);

  const fetchLocation  = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // Fetch the city and country using OpenCage Geocoding API
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key= 2e4ba06cdd6a414e83c2768a205ece7d`
            // // 'https://api.mapbox.com/search/geocode/v6/reverse?longitude={longitude}&latitude={latitude}&access_token=pk.eyJ1Ijoic2hyZXl5OTkiLCJhIjoiY2x6aDE4c3FxMWdxczJrczN0bHR5empzMiJ9.zkI0wbrunndEQgSfqeBXxQ'
            // 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude={latitude}&llongitude={longitude}&localityLanguage=en'
          );

          const data = await response.json();
          if (data.results > 0) {
            const { city, country } = data.results[0].components;
            setAddress({ city, country });
          } else {
            setAddress({ city: 'Unknown', country: 'Unknown' });
          }
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <button onClick={fetchLocation}>Get Your Location</button>
      {location.latitude && location.longitude && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
      {address && (
        <p>
          City: {address.city}, Country: {address.country}
        </p>
      )}
    </div>
  );
}

export default GetLocation;
