
import WeatherApi from './api-calls/WeatherApi';
import './App.css';
import WeatherPage from './pages/WeatherPage';
import Home from './pages/Home';
import Weather from './components/Weather';
import './background.png';
function App() { 
  return (
    <div className="App">
      <Home />
      <WeatherPage />
    </div>
  );
}

export default App;
