import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import './styles/ActivityList.css'
import { useEffect } from "react";
import Activity from "./Activity";

const ActivityList = () => {
    const state = useSelector(state => state)
    useEffect(() => {
        // console.log('unmounting app component. state:', state)
        return () => localStorage.setItem('state', JSON.stringify(state))
    })
    const activities = useSelector(state => state.activities)
    // localStorage.setItem('activities', JSON.stringify(activities))
    const activitiesList = activities.length > 0 && <div className="list-container">
        {activities.map((activity, i) => {
            // console.log('from activity list:', activity)
            return (
                <Activity activity={activity} key={i} />
            )
        })}
    </div>
    return (
        <div>
            {/* Activity List: */}
            <div>
                {activitiesList}
            </div>
        </div>
    )

}

export default ActivityList;