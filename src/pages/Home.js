import React, { useState } from "react";
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import Timeline from "../components/Timeline";


const Home = () => {
    const localstate = useSelector(state => state)//just for the local storage
    const dispatch = useDispatch()
    useEffect(() => {
        return () => localStorage.setItem('state', JSON.stringify(localstate))
    })

    const stateInfo = useSelector(state => state.infoReducer)
    const stateActivities = useSelector(state => state.activityReducer)
    const friendsList = stateInfo.info.friends
    const weatherInfo = useSelector(state => state.weatherReducer.weatherInfo)

    const message = weatherInfo.temperture >= 22 ? 'Great Weather! You should play outside' : `You should schedule a play-date! `

    const randomFriend = friendsList[Math.floor(Math.random() * friendsList.length)]
    const randomActivity = stateActivities.activities[Math.floor(Math.random() * stateActivities.activities.length)]?.activityName
    const [suggestion, setSuggestion] = useState('')

    const makeMessage = () => {

        const friends = friendsList.length > 0 ? true : false;
        const activities = stateActivities.activities.length > 0 ? true : false;
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
                {message}   <br></br>
                {suggestion}
                {/* <div className="pop-message">
                    {suggestion}
                </div> */}
            </div>
            <div>
                <Timeline />
                <button onClick={() => { dispatch({ type: 'CLEAR_LOG_HISTORY' }) }}>Clear History</button>
            </div>
        </div>
    )
}

export default Home;