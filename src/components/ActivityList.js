import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import './ActivityList.css'
import { useEffect } from "react";

const ActivityList = () => {
    const state = useSelector(state => state)
    useEffect(() => {
        console.log('unmounting app component. state:', state)
        return () => localStorage.setItem('state', JSON.stringify(state))
    })
    const activities = useSelector(state => state.activities)
    // localStorage.setItem('activities', JSON.stringify(activities))
    const activitiesList = activities.length > 0 && <div className="list-container">
        {activities.map((activity, i) => {
            return (
                <div className="activity glassmorphism" key={i}>

                    <h3>activityName: {activity.activityName}</h3>
                    <p> {activity.description}</p>
                </div>
            )
        })}
    </div>
    return (
        <div>
            Activity List:
            <div>
                {activitiesList}
            </div>
        </div>
    )

}

export default ActivityList;