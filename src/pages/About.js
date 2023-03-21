import React from "react";
import { useDispatch, useSelector } from 'react-redux'

const About = () => {

    return (
        <div className="page">
            <div className="about glassmorphism">
                <h1>About</h1>
                <p>This App was created to manage your day as a parent.</p>
                <p>It tells you if the weather is nice and if you should schedule a play-date or maybe play outside.</p>
                <p>You can add lists of things you want to do or buy or even people to hang out with.</p>
                <p>Next update you will be able to see near parks you can go out to, or indoors playgrounds when it rains.</p>
            </div>
        </div>

    )
}

export default About;