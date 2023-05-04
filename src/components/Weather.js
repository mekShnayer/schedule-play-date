import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './styles/Weather.css'
import weatherFetch from "../api-calls/weatherFetch";
import locationFetch from "../api-calls/locationFetch";

const Weather = () => {

    const dispatch = useDispatch()
    const weatherInfo = useSelector(state => state.weatherReducer.weatherInfo)
    const userLocation = useSelector(state => state.locationReducer.userLocation)

    const key = '0de1489e819284a8e68496f5db28f2b6';//should store this better
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.x}&lon=${userLocation.y}&appid=${key}&units=metric`;
    locationFetch(userLocation, dispatch);
    weatherFetch(url, userLocation, dispatch, weatherInfo)

    const { temperture, feel_like, location, updateTime, text, image_url } = weatherInfo;

    return (
        <div id="weather-component">
            {weatherInfo.temperture !== '' ?
                <div className="weather-info-container ">
                    
                    <div className=" weather-info glassmorphism">  Temperture: {temperture}  </div>
                    <div className=" weather-info glassmorphism">  Feelt like: {feel_like}  </div>
                    <div className=" weather-info glassmorphism">    {location}  </div>
                    <div className=" weather-info glassmorphism">   {text}  </div>
                    {/* <img src={image_url} className="glassmorphism-child weather-info" alt='image' id="weather-image"></img> */}
                </div> : 'loading...'}
        </div>
    )
}


export default Weather;