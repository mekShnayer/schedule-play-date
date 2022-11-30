
import WeatherApi from './api-calls/WeatherApi';
import './App.css';
import WeatherPage from './pages/WeatherPage';
import Home from './pages/Home';
import Weather from './components/Weather';
import './background.png';
import { Route, Routes, Navigate } from 'react-router-dom';
import ActivityPage from './pages/ActivityPage';
import About from './pages/About';
import NavBar from './routing/NavBar';
import Profile from './pages/Profile';
import LoginForm from './components/LoginForm';
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const isLogedIn = useSelector(state => state.isLogedIn)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={isLogedIn ? <Home /> : <LoginForm />}></Route>
        {/* <Route path='/home' element={<Home />}></Route> */}
        <Route path='/about' element={<About />}></Route>
        <Route path='/activity' element={<ActivityPage />}></Route>
        <Route path='/weather' element={<WeatherPage />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
      {isLogedIn ? <NavBar /> : ''}




      {/* <Home />
      <WeatherPage /> */}
    </div>
  );
}

export default App;
