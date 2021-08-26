import tire from '../tire.png';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import MapContainer from './MapContainer';
import NavBar from './NavBar';
// import styled from 'styled-components';
import Home from '../pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
        <img src={tire} className="App-logo" alt="logo" />
        <h2>
          The one stop solution for making travelling easy!
        </h2>
      </header>
      <main className="App-main">
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </main>
      <MapContainer />
    </div>
  );
}

export default App;
