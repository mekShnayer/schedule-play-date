import React from "react";
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";
const Home = () => {
    const localstate = useSelector(state => state)
    useEffect(() => {
        console.log('unmounting app component. state:', state)
        return () => localStorage.setItem('state', JSON.stringify(localstate))
    })
    // const dispatch = useDispatch()
    const weatherInfo = useSelector(state => state.weatherInfo)
    const state = useSelector(state => state)
    // localStorage.setItem('state', JSON.stringify(state))
    // console.log(localStorage)
    // const userLocation = useSelector(state => state.userLocation)
    const message = weatherInfo.temperture >= 22 ? 'your should play outside' : 'you should schedule a play-date!'
    return (
        <div>
            hey there, this is the play date app!

            <div className="message">
                {message}
            </div>
        </div>
    )
}

export default Home;