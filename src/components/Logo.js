import React from "react";
import './styles/Logo.css'
import rain from '../rain.jpg';
import sunny from '../sunny.png';
import { useSelector } from "react-redux";
const Logo = () => {
    const weather = useSelector(state => state.weatherReducer.weatherInfo)
    
    return (
        <div className="logo">
            <div className="text">
                <h1 className="logo-h1">Play Date</h1>
                <h6 className="logo-h6">MAKE THE BEST OF YOUR DAY</h6>
            </div >

            <div >
                <img src={weather.image_url} className="ball"></img>
            </div>
        </div>
    )
}

export default Logo;