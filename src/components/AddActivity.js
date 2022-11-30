import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

const initState = {
    activityName: '',
    description: ''
}


const AddActivity = () => {
    const dispatch = useDispatch()
    const [activity, setActivity] = useState(initState)




    const updateActivity = (event) => {
        setActivity({
            ...activity,
            [event.target.name]: event.target.value
        })
    }

    const addActivity = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_ACTIVITY', payload: activity })
    }
    const clear = (e) => {
        e.preventDefault();
        setActivity({
            activityName: '',
            description: ''
        })
    }
    return (
        <div className="container/card">
            <div className="header">
                <h1>Add Activity:</h1>
            </div>
            <div className="form-body">
                <form onSubmit={addActivity}>
                    <div>
                        <input type='text' placeholder="activity name" name='activityName' value={activity.activityName} onChange={updateActivity}></input>
                    </div>
                    <div>
                        <input type='text' placeholder="description" name='description' value={activity.description} onChange={updateActivity}></input>
                    </div>
                    <div>
                        <input type='submit' value='Add'></input>
                        <button onClick={clear}>clear</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default AddActivity;