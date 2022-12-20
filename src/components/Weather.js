import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './styles/Weather.css'
import weatherFetch from "../api-calls/weatherFetch";
import locationFetch from "../api-calls/locationFetch";

const Weather = () => {

    const dispatch = useDispatch()
    const weatherInfo = useSelector(state => state.weatherReducer.weatherInfo)
    const userLocation = useSelector(state => state.locationReducer.userLocation)

    locationFetch(userLocation, dispatch);
    const key = '0de1489e819284a8e68496f5db28f2b6';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.x}&lon=${userLocation.y}&appid=${key}&units=metric`;
    
    weatherFetch(url, userLocation, dispatch, weatherInfo)
    const { temperture, feel_like, location, updateTime, text, image_url } = weatherInfo;
    return (
        <div className="weather-component">
            <br></br>
            {weatherInfo.temperture !== '' ?
                <div className="weather-info-container glassmorphism">
                    <p className="glassmorphism-child">  temperture: {temperture}  </p>
                    <p className="glassmorphism-child">  feelt like: {feel_like}  </p>
                    <p className="glassmorphism-child">   location: {location}  </p>
                    {/* <p className="glassmorphism-child">  update time: {updateTime}  </p> */}
                    <p className="glassmorphism-child">   {text}  </p>
                    <img src={image_url} className="glassmorphism-child" alt='image'></img>
                </div> : 'loading...'}
        </div>
    )
}


export default Weather;