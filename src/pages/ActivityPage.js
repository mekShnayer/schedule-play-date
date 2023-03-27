import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import ActivityList from "../components/ActivityList";
import AddActivity from "../components/AddActivity";
import './ActivityPage.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ActivityPage = () => {
    const state = useSelector(state => state.activityReducer)
    useEffect(() => {
        return () => localStorage.setItem('state', JSON.stringify(state))
    })
    return (
        <div>
             
            <div className="activities ">
                <h3>Activities</h3>
                <AddActivity />
                <ActivityList />
            </div>
        </div>
    )
}

export default ActivityPage;