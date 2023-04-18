import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { moment } from "moment"

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
        console.log(id)
        const getDate = () => {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
            let now = new Date()
            let time_message = `${now.toLocaleDateString("en-US", options)} ${now.toLocaleTimeString()}`
            return time_message
        }
        const activityDone = {
            name: activities[id - 1].activityName,
            description: activities[id - 1].description,
            date:getDate()
        }

        dispatch({ type: 'DONE_ACTIVITY', payload: activityDone })
    }

    return (
        <div className="activity glassmorphism" id={activity.id}>
            <h3 className="margin-5"> {activity.activityName}</h3>
            <p className="margin-5"> {activity.description}</p>
            <div className="activity-buttons-container">
                <button onClick={() => deleteActivity(activity.id)}>Delete</button>
                <button onClick={() => Done(activity.id)}>Done!</button>
            </div>

        </div>
    )

}

export default Activity;