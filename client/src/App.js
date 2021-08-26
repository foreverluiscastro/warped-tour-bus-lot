import logo from './logo.svg';
import tire from './tire.png';
import './App.css';
import MapContainer from './MapContainer';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
        <img src={tire} className="App-logo" alt="logo" />
        <p>
          The one stop solution for making travelling easy.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MapContainer />
    </div>
  );
}

export default App;
