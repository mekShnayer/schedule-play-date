import React from "react";
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    // const dispatch = useDispatch()
    const weatherInfo = useSelector(state => state.weatherInfo)
    // const userLocation = useSelector(state => state.userLocation)
    const message = weatherInfo.temperture >= 22 ? 'your should play outside' : 'you should schedule a play-date!'
    return (
        <div>
            hey there, this is the play date app!
            <br>
            </br>
            <ol>
                <p>need to perform:</p>
                <li>log in form</li>
                <li>pages: home, profile, </li>
                <li className='done'>api call: location , weather</li>
                <li>make sure the info is saved for your user</li>
                <li></li>
            </ol>
            <div className="message">
                {message}
            </div>
        </div>
    )
}

export default Home;