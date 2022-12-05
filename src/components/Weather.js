import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './Weather.css'


const Weather = () => {

    const dispatch = useDispatch()
    const weatherInfo = useSelector(state => state.weatherInfo)
    const userLocation = useSelector(state => state.userLocation)
    const fetchCall = (url) => {
        if (userLocation.x != '' && userLocation.y != '') {
            fetch(url).then(res => res.json()).then(data => {
                // console.log(data)
                if (data.current.temp_c != weatherInfo.temperture) {
                    dispatch({
                        type: 'UPDATE_WEATHERINFO', weatherInfo:
                        {
                            image_url: data.current.condition.icon,
                            temperture: data.current.temp_c,
                            feel_like: data.current.feelslike_c,
                            text: data.current.condition.text,
                            location: data.location.name,
                            updateTime: data.location.localtime,
                        }
                    })
                }
            }).catch(err => console.log('net error', err))
        } else {
            console.log('user location is undefined')
        }
    }
    const checkLocation = (userLocation) => {
        if ("geolocation" in navigator) {
            // console.log("Available")
            navigator.geolocation.getCurrentPosition((position) => {
                // console.log(position.coords.latitude, position.coords.longitude)
                if (position.coords.latitude != userLocation.x) {

                    dispatch({
                        type: 'UPDATE_USERLOCATION', userLocation: {
                            x: position.coords.latitude,
                            y: position.coords.longitude
                        }
                    })
                }
            })

        } else {
            console.log("location Not Available");
        }
    }

    checkLocation(userLocation);
    const url = `http://api.weatherapi.com/v1/current.json?key=0344d9a9678746cd850100447222311&q=${userLocation.x},${userLocation.y}`
    fetchCall(url)

    return (
        <div className="weather-component">
            <br></br>
            {weatherInfo.temperture !== '' ?
                <div className="weather-info-container glassmorphism">
                    <p className="glassmorphism-child">  temperture: {weatherInfo.temperture}  </p>
                    <p className="glassmorphism-child">  feelt like: {weatherInfo.feel_like}  </p>
                    <p className="glassmorphism-child">   location: {weatherInfo.location}  </p>
                    <p className="glassmorphism-child">  update time: {weatherInfo.updateTime}  </p>
                    <p className="glassmorphism-child">   {weatherInfo.text}  </p>
                    <img src={weatherInfo.image_url} className="glassmorphism-child" alt='image'></img>
                </div> : 'loading...'}
        </div>
    )
}


export default Weather;