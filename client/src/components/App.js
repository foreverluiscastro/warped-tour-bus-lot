import tire from '../tire.png';
import '../App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import MapContainer from './MapContainer';
import NavBar from './NavBar';
import Home from '../pages/Home';
import Trip from '../pages/Trip';
import Food from '../pages/Food';
import Lodging from '../pages/Lodging';
import Attractions from '../pages/Attractions';
import { Button } from '../styles';
import styled from 'styled-components';

function App() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
      if (!navigator.geolocation) {
          setStatus("Geolocation is not supported in your browser");
      } else {
          setStatus("Locating...");
          navigator.geolocation.getCurrentPosition((postion) => {
              setStatus(null);
              setLat(postion.coords.latitude);
              setLng(postion.coords.longitude);
          }, () => {
              setStatus("Unable to retrieve your location.");
          });
      }
  }

  return (
    <div className="App">
      <header className="App-header">
      <Logo>
        The Road Tripper
      </Logo>
        <img src={tire} className="App-logo" alt="logo" />
        <h2>
          The one stop solution for making travelling easy!
        </h2>
      </header>
      <main className="App-main">
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* The idea behind the different pages is to make
          API calls that return that specific information. Some of these
          calls may come from the google Map API and maybe some 
          public resources */}
          <Route exact path="/trips" component={Trip}/>
          <Route exact path="/food" component={Food}/>
          <Route exact path="/lodging" component={Lodging}/>
          <Route exact path="/attractions" component={Attractions}/>
        </Switch>
      <Button color="secondary" onClick={getLocation}>Use my current location</Button>
      </main>
      <MapContainer lat={lat} lng={lng}/>
    </div>
  );
}

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 4rem;
  color: #00e0d7;
  text-shadow: 3px 0 0 #000, 0 3px 0 #000, -3px 0 0 #000, 0 -3px 0 #000;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;


export default App;
