import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import ActivityList from "../components/ActivityList";
import AddActivity from "../components/AddActivity";
import './ActivityPage.css'
import { useEffect } from "react";


const ActivityPage = () => {
    // const dispatch = useDispatch()
    // const userLocation = useSelector(state => state.userLocation)
    const state = useSelector(state => state)
    useEffect(() => {
        // console.log('unmounting app component. state:', state)
        return () => localStorage.setItem('state', JSON.stringify(state))
    })
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