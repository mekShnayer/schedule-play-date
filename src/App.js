
import WeatherApi from './api-calls/WeatherApi';
import './App.css';

function App() {
  return (
    <div className="App">
      hey there, this is the play date app!
      <br>
      </br>
      <ol>
        <p>need to perform:</p>
        <li>log in form</li>
        <li>pages: home, profile, </li>
        <li className='done'>api call: location , weather</li>
        <li>make sure the info is saved for your user</li>
        <li></li>
      </ol>
      <WeatherApi />
    </div>
  );
}

export default App;
