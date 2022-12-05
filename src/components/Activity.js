import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import './ActivityList.css'
import { useEffect } from "react";

const Activity = (props) => {
    const dispatch = useDispatch()
    const activities = useSelector(state => state.activities)
    const activity = props.activity;
    const deleteActivity = (id) => {
        const filter = activities.filter(activity => activity.id != id)
        dispatch({ type: 'DELETE_ACTIVITY', activities: filter })
        //should make sure the id's are not repetetive after we delete and add more.
    }
    return (
        <div className="activity glassmorphism" id={activity.id}>
            <h3>activityName: {activity.activityName}</h3>
            <p> {activity.description}</p>
            <button onClick={() => deleteActivity(activity.id)}>delete</button>
        </div>
    )

}

export default Activity;