
import './App.css';
import WeatherPage from './pages/WeatherPage';
import Home from './pages/Home';
import './background.png';
import { Route, Routes } from 'react-router-dom';
import ActivityPage from './pages/ActivityPage';
import About from './pages/About';
import Profile from './pages/Profile';
import LoginForm from './components/LoginForm';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Logo from './components/Logo';
import Header from './components/Header';
import Testing from './pages/Testing';

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const isLogedIn = useSelector(state => state.loginReducer.isLogedIn)

  const onlineCheck = () => {
    const localState = JSON.parse(localStorage.getItem('state'))
    // console.log('local state', localState)
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

    // console.log('unmounting app component. state:', state)
    return () => localStorage.setItem('state', JSON.stringify(state))
  })
  return (
    <div className="App">
      {/* <div className='logo-container'>
        <Logo />
      </div> */}
      <div className='page-container'>
        <Routes>
          <Route path='/' element={isLogedIn ? <Home /> : <LoginForm />}></Route>
          {/* <Route path='/home' element={<Home />}></Route> */}
          <Route path='/about' element={<About />}></Route>
          <Route path='/activity' element={<ActivityPage />}></Route>
          <Route path='/weather' element={<WeatherPage />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/testing' element={<Testing />}></Route>
        </Routes>
      </div>
      {isLogedIn ? <Header /> :
        <Logo />
      }
      {/* {isLogedIn ? 'logged in' : 'logged out'} */}

    </div>
  );
}

export default App;
