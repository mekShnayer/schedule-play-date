import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import ActivityList from "../components/ActivityList";
import AddActivity from "../components/AddActivity";
import './ActivityPage.css'



const ActivityPage = () => {
    // const dispatch = useDispatch()
    // const userLocation = useSelector(state => state.userLocation)
    return (
        <div className="page">
            Activity Page
            <br></br>
            <AddActivity />
            <div>
                <ActivityList />
            </div>
        </div>
    )
}

export default ActivityPage;