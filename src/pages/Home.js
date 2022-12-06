import React, { useState } from "react";
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";
import Header from '../components/Header'


const Home = () => {
    const localstate = useSelector(state => state)
    useEffect(() => {
        return () => localStorage.setItem('state', JSON.stringify(localstate))
    })
    const state = useSelector(state => state)
    const friendsList = state.info.friends
    const weatherInfo = useSelector(state => state.weatherInfo)

    const message = weatherInfo.temperture >= 22 ? 'Great Weather! You should play outside' : `You should schedule a play-date! `

    const randomFriend = friendsList[Math.floor(Math.random() * friendsList.length)]
    const randomActivity = state.activities[Math.floor(Math.random() * state.activities.length)]?.activityName
    const [suggestion, setSuggestion] = useState('')

    const makeMessage = () => {

        const friends = friendsList.length > 0 ? true : false;
        const activities = state.activities.length > 0 ? true : false;
        if (suggestion == '') {
            if (weatherInfo.temperture <= 22 && friends == true && activities == true) {
                setSuggestion(`wanna ${randomActivity} with ${randomFriend}?`)
            }
        }

    }
    makeMessage()


    return (
        <div className="home-page">
            <div className="message">
                <img src={weatherInfo.image_url}></img>
                {message}
            </div>
            <div className="pop-message">
                {suggestion}
            </div>
        </div>
    )
}

export default Home;