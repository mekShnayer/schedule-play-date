
import WeatherApi from './api-calls/WeatherApi';
import './App.css';
import WeatherPage from './pages/WeatherPage';
import Home from './pages/Home';
import Weather from './components/Weather';
import './background.png';
function App() { 
  return (
    <div className="App">
      {/* <img src={} ></img> */}
      {/* <Home /> */}
      {/* <WeatherPage /> */}
      <Weather />
    </div>
  );
}

export default App;
