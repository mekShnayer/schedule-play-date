import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import me from '../me.jpeg'
const About = () => {
    const existing_features = ['Add your child information', 'Add activities you and your kid enjoy', 'Check the weather to see if its best to stay home or play outside', 'See time log of the activities you have already done',
        'Add to do lists to manage your day']
    const upcomming_features = ['Chat - get to know the other moms and dads in your community', 'Information page - with articles and advices', 'Adding first year photo album']
    return (
        <div className="page-item">
            <div className="about glassmorphism">
                <h1>About</h1>
                <p>My name is Shani and I created this app in inspiration to bring together a community.<br></br>
                </p>
                <p>As a young parent I found myself searching to meet other parents and share experience together. I searched for knowledge everywhere asking how to be the best parent I can be. I follow so many experts in child development online and I wanted to gather this knowledge into one ultimate space.</p>
                <div className="features">
                    <div>
                        <h4>So on that note - I give you a site that can:</h4>
                        <ul>
                            {existing_features.map((el, i) => <li key={i}>{el}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4>Upcomming fitures:</h4>
                        <ul>
                            {upcomming_features.map((el, i) => <li key={i}>{el}</li>)}
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