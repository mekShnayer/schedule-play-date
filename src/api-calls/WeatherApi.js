import React, { useState } from "react";
import { connect } from 'react-redux';
import './WeatherApi.css'
const WeatherApi = (props) => {

    const fetchCall = (url) => {
        if (props.userLocation.x != '') {
            fetch(url).then(res => res.json()).then(data => {
                console.log(data)
                if (data.current.temp_c != props.weatherInfo.temperture) {

                    props.updateWeather({
                        image_url: data.current.condition.icon,
                        temperture: data.current.temp_c,
                        feel_like: data.current.feelslike_c,
                        text: data.current.condition.text,
                        location: data.location.name,
                        updateTime: data.location.localtime,
                    })
                }

            }).catch(err => console.log('net error', err))
        } else {
            console.log('user location is undefined')
        }
    }
    if ("geolocation" in navigator) {
        console.log("Available")
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude)
            if (position.coords.latitude != props.userLocation.x) {

                props.updateUserLocation({
                    x: position.coords.latitude,
                    y: position.coords.longitude
                })
            }
        })

    } else {
        console.log("location Not Available");
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=0344d9a9678746cd850100447222311&q=${props.userLocation.x},${props.userLocation.y}`

    fetchCall(url)
    console.log('props:', props)
    return (
        <div className="weather-component">weather api
            <br></br>
            {props.weatherInfo.temperture !== '' ?
                <div className="weather-info-container glassmorphism">weather information:
                    <p>  temperture: {props.weatherInfo.temperture}  </p>
                    <p>  feelt like: {props.weatherInfo.feel_like}  </p>
                    <p>  location: {props.weatherInfo.location}  </p>
                    <p>  update time: {props.weatherInfo.updateTime}  </p>
                    <p>   {props.weatherInfo.text}  </p>
                    <img src={props.weatherInfo.image_url} alt='image'></img>
                </div> : 'loading...'}

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        weatherInfo: state.weatherInfo,
        userLocation: state.userLocation
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateWeather: (weatherInfo) => dispatch({ type: 'UPDATE_WEATHERINFO', weatherInfo: weatherInfo }),
        updateUserLocation: (userLocation) => dispatch({ type: 'UPDATE_USERLOCATION', userLocation: userLocation })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApi);