import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import ActivityList from "../components/ActivityList";
import AddActivity from "../components/AddActivity";
import './ActivityPage.css';
import { useEffect } from "react";


const ActivityPage = () => {
    const state = useSelector(state => state.activityReducer)
    useEffect(() => {
        return () => localStorage.setItem('state', JSON.stringify(state))
    })
    return (
        <div className="page">
            <AddActivity />
            <ActivityList />

        </div>
    )
}

export default ActivityPage;