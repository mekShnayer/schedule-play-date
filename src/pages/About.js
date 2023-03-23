import React from "react";
import { useDispatch, useSelector } from 'react-redux'

const About = () => {

    return (
        <div className="page">
            <div className="about glassmorphism">
                <h1>About</h1>
                <p>My name is Shani and I created this app in inspiration to bring together a community.
                </p>
                <p> As a young parent I found myself searching to meet other parents and share experience together. I searched for knowledge everywhere asking how to be the best parent I can be. I follow so many experts in child development online and I wanted to gather this life into one ultimate space.</p>
                <p>So on that note - I give you a site you can:
                </p>
                <ul>
                    <li>Add your child information (name,age, friends list)</li>
                    <li>Add activities you and your kid enjoy </li>
                    <li>check the weather to see if its best to stay home or play outside</li>
                    <li>See time log of the activities you have already done</li>
                    <li>Add to do lists to manage your day</li>
                </ul>
                <p>upcomming fitures:</p>
                <un>

                    <li>Chat - get to know the other moms and dads in your community</li>
                    <li>information page - with articles and advices</li>
                </un>

            </div>
        </div>

    )
}

export default About;