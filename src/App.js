
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


function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const isLogedIn = useSelector(state => state.isLogedIn)
  // localStorage.setItem('state', JSON.stringify(state))
  // console.log(JSON.parse(localStorage.getItem('state')))
  // JSON.parse(localStorage.getItem('state'))
  const localState = JSON.parse(localStorage.getItem('state'))
  // useEffect(() => {
  //   const localState = JSON.parse(localStorage.getItem('state'))
  //   localState.isLogedIn ?
  //     console.log('rendering app', localStorage.getItem('state'))
  // }, [])
  const onlineCheck = () => {
    const localState = JSON.parse(localStorage.getItem('state'))
    if (localState) {
      // console.log(localState)
      localState.isLogedIn ?  dispatch({ type: 'UPDATE_STATE' ,state:localState}) : console.log('')
    } else {
      console.log('local storage undefined or null')
      //should do nothing
    }
  }
  useEffect(() => {
    onlineCheck()
  }, [])

  useEffect(() => {
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
      {isLogedIn ? <NavBar /> : ''}
      {isLogedIn ? 'logged in' : 'logged out'}

    </div>
  );
}

export default App;
