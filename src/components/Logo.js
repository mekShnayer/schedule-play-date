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
                {weather.image_url !== '' ? <img src={weather.image_url} className="ball" alt=""></img> : <div className="ball" style={{
                    backgroundImage: "linear-gradient(to top right, rgb(23, 23, 27), rgb(28, 117, 162), rgb(177, 219, 235)) ", height: "40px", width: "40px", borderRadius: "40px"
                }}></div>}
            </div>
        </div >
    )
}

export default Logo;