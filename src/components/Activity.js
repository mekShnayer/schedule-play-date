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
        //activity name , date and time?, push this to the state and storage to show history
        console.log(id)
        const getDate = () => {
            return moment(new Date().getTime()).format("dddd, MMMM Do YYYY, h:mm:ss a")
        }//currently doesnt work with format- need to check how to use with javascript
        const activityDone = {
            name: activities[id - 1].activityName,
            description: activities[id - 1].description,
            date: JSON.stringify(new Date())////need to fix with format
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