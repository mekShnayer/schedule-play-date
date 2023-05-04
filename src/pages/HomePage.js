import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './HomePage.css';
import SideMenu from "../routing/SideMenu";
import Lists from "../components/lists/Lists";
import Menu from '../routing/Menu'
import Timeline from '../components/Timeline'
import ActivityPage from '../pages/ActivityPage'


const HomePage = () => {

    const localstate = useSelector(state => state)//just for the local storage
    const dispatch = useDispatch()

    useEffect(() => {
        return () => localStorage.setItem('state', JSON.stringify(localstate))
    })//this send all the current information of the state to local storage.

    const stateInfo = useSelector(state => state.infoReducer)
    const stateActivities = useSelector(state => state.activityReducer)
    const friendsList = stateInfo.info.friends
    const weatherInfo = useSelector(state => state.weatherReducer.weatherInfo)

    const message = weatherInfo.temperture >= 22 ? 'Great Weather! You should play outside' : `You should schedule a play-date! `

    const randomFriend = friendsList[Math.floor(Math.random() * friendsList.length)]
    const randomActivity = stateActivities.activities[Math.floor(Math.random() * stateActivities.activities.length)]?.activityName
    const [suggestion, setSuggestion] = useState('')

    const makeSuggestion = () => {

        const friends = friendsList.length > 0 ? true : false;
        const activities = stateActivities.activities.length > 0 ? true : false;
        if (suggestion == '') {
            if (weatherInfo.temperture <= 22 && friends == true && activities == true) {
                setSuggestion(`wanna ${randomActivity} with ${randomFriend}?`)
            }
        }

    }
    makeSuggestion()

    return (
        <div className="home-page ">
            <div className="message-content flex-item">
                <p>{message}<br></br> {suggestion}</p>
               
            </div>
            <div className="flex-item">
                <Timeline />
            </div>
            <hr></hr>
            <div className="flex-item">
                <ActivityPage />
            </div>
            <hr></hr>
            <div className="flex-item">
                <Lists />
            </div>
        </div>
    )
}

export default HomePage;