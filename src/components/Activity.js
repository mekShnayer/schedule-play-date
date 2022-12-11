import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import './styles/ActivityList.css'
import { useEffect } from "react";

const Activity = (props) => {
    const dispatch = useDispatch()
    const activities = useSelector(state => state.activityReducer.activities)
    const activity = props.activity;
    const deleteActivity = (id) => {
        const filter = activities.filter(activity => activity.id != id)
        dispatch({ type: 'DELETE_ACTIVITY', activities: filter })
        //should make sure the id's are not repetetive after we delete and add more.
    }

    const Done = (id) => {
        //activity name , date and time?, push this to the state and storage to show history
        console.log(id)
        const activityDone = {
            name: activities[id - 1].activityName,
            description: activities[id - 1].description,
            // id: id,
            date: JSON.stringify(new Date())
        }
        dispatch({ type: 'DONE_ACTIVITY', payload: activityDone })
    }

    return (
        <div className="activity glassmorphism" id={activity.id}>
            <h3>activityName: {activity.activityName}</h3>
            <p> {activity.description}</p>
            <button onClick={() => deleteActivity(activity.id)}>delete</button>
            <button onClick={() => Done(activity.id)}>Done!</button>
        </div>
    )

}

export default Activity;