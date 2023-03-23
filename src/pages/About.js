import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import me from '../me.jpeg'
const About = () => {

    return (
        <div className="page">
            <div className="about glassmorphism">
                <h1>About</h1>
                <p>My name is Shani and I created this app in inspiration to bring together a community.<br></br>
                </p>
                <p>As a young parent I found myself searching to meet other parents and share experience together. I searched for knowledge everywhere asking how to be the best parent I can be. I follow so many experts in child development online and I wanted to gather this life into one ultimate space.</p>
                <div className="features">
                    <div>
                        <h4>So on that note - I give you a site that can:</h4>
                        <ul>
                            <li>Add your child information (name,age, friends list)</li>
                            <li>Add activities you and your kid enjoy </li>
                            <li>check the weather to see if its best to stay home or play outside</li>
                            <li>See time log of the activities you have already done</li>
                            <li>Add to do lists to manage your day</li>
                        </ul>
                    </div>
                    <div>
                        <h4>upcomming fitures:</h4>
                        <ul>
                            <li>Chat - get to know the other moms and dads in your community</li>
                            <li>information page - with articles and advices</li>
                        </ul>
                    </div>

                </div>

                <p>Hope you enjoy this journey!</p>
                <p>shani</p>
                <img src={me} id='photo-of-me' alt="developer photo"></img>
            </div>
        </div>

    )
}

export default About;