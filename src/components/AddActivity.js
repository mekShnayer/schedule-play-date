import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";

const AddActivity = () => {
    const state = useSelector(state => state.activityReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => localStorage.setItem('state', JSON.stringify(state))
    })

    const [activity, setActivity] = useState({
        activityName: '',
        description: ''
    })

    const updateActivity = (event) => {
        setActivity({
            ...activity,
            [event.target.name]: event.target.value,
        })
    }

    const addActivity = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_ACTIVITY', payload: { id: `${state.activities.length + 1}`, ...activity } })
        setActivity({
            activityName: '',
            description: ''
        })
    }

    return (
        <div className="add-activity-form-container">
            <form onSubmit={addActivity} className="add-activity-form">
                <input type='text' placeholder="activity name" name='activityName' value={activity.activityName} onChange={updateActivity} className="activity-form-input"></input>
                <input type='text' placeholder="description" name='description' value={activity.description} onChange={updateActivity} className="activity-form-input"></input>
                <input type='submit' value='Add Activity' className="activity-form-input"></input>
            </form>
        </div >
    )
}

export default AddActivity;