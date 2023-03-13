import React from "react";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import Activity from "./Activity";

const ActivityList = () => {

    const state = useSelector(state => state.activityReducer)

    useEffect(() => {
        return () => localStorage.setItem('state', JSON.stringify(state))
    })

    const activities = useSelector(state => state.activityReducer.activities)
    //
    const activitiesList = activities.length > 0 && <div className="activities-container">
        {activities.map((activity, i) => {

            return (
                <Activity activity={activity} key={i} />
            )
        })}
    </div>
    //
    return (
        <div>
            {activitiesList}
        </div>
    )

}

export default ActivityList;