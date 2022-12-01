import React from "react";
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";
import Header from '../components/Header'


const Home = () => {
    const localstate = useSelector(state => state)
    useEffect(() => {
        console.log('unmounting app component. state:', state)
        return () => localStorage.setItem('state', JSON.stringify(localstate))
    })
    const weatherInfo = useSelector(state => state.weatherInfo)
    const state = useSelector(state => state)
    const message = weatherInfo.temperture >= 22 ? 'Great Weather! You should play outside' : 'You should schedule a play-date!'
    return (
        <div className="home-page">
            <div className="message">
                <img src={weatherInfo.image_url}></img>
                {message}
            </div>
        </div>
    )
}

export default Home;