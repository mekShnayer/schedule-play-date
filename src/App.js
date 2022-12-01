
import WeatherApi from './api-calls/WeatherApi';
import './App.css';
import WeatherPage from './pages/WeatherPage';
import Home from './pages/Home';
import './background.png';
import { Route, Routes } from 'react-router-dom';
import ActivityPage from './pages/ActivityPage';
import About from './pages/About';
import NavBar from './routing/NavBar';
import Profile from './pages/Profile';
import LoginForm from './components/LoginForm';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Logo from './components/Logo';
import Header from './components/Header';


function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const isLogedIn = useSelector(state => state.isLogedIn)

  const onlineCheck = () => {
    const localState = JSON.parse(localStorage.getItem('state'))
    console.log('local state', localState)
    if (localState) {
      localState.isLogedIn ? dispatch({ type: 'UPDATE_STATE', payload: { ...localState } }) : localStorage.setItem('state', JSON.stringify(state))
    } else {
      localStorage.setItem('state', JSON.stringify(state))
    }
  }
  useEffect(() => {
    onlineCheck()
  }, [])

  useEffect(() => {

    console.log('unmounting app component. state:', state)
    return () => localStorage.setItem('state', JSON.stringify(state))
  })
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
      <Logo />
      {isLogedIn ? <Header /> : ''}
      {/* {isLogedIn ? 'logged in' : 'logged out'} */}

    </div>
  );
}

export default App;
