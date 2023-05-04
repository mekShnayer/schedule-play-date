
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ActivityPage from './pages/ActivityPage';
import About from './pages/About';
import Profile from './pages/Profile';
import LoginForm from './components/LoginForm';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Testing from './pages/Testing';
import onlineCheck from './exported-functions/onlineCheck';
import Lists from './components/lists/Lists';
import HomePage from './pages/HomePage';
import Menu from './routing/Menu';
import SideMenu from './routing/SideMenu';


function App() {
  const dispatch = useDispatch()
  const update = () => {
    const localState = JSON.parse(localStorage.getItem('state'))
    console.log('updating up', localState)
    localState ? dispatch({ type: 'UPDATE_STATE', payload: localState.listReducer.lists }) : console.log('local storage not found')
  }

  const state = useSelector(state => state)

  const isLogedIn = useSelector(state => state.loginReducer.isLogedIn)

  useEffect(() => {
    console.log('mounting up')
    onlineCheck(state, dispatch)
    update();
  }, [])

  useEffect(() => {
    return () => { console.log('unmounting app'); localStorage.setItem('state', JSON.stringify(state)) }
  })
  return (
    <div className="App">
      {isLogedIn ?
        <div className="testing grid-container">
          <div className="grid-item header-item" >
            <Menu />
          </div>
          <div className="grid-item sidebar-item">
            <SideMenu />
          </div>
          <div className="grid-item page-item">
            <div className='page '>
              <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/activities' element={<ActivityPage />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/lists' element={<Lists />}></Route>
                <Route path='/testing' element={<Testing />}></Route>
              </Routes>
            </div>

          </div>
        </div>

        :
        <LoginForm />
      }

    </div>
  );
}

export default App;
