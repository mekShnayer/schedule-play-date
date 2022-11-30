import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import AddActivity from "../components/AddActivity";

const ActivityPage = () => {
    // const dispatch = useDispatch()
    // const userLocation = useSelector(state => state.userLocation)
    return (
        <div>
            Activity Page
            <br></br>
            <AddActivity />
        </div>
    )
}

export default ActivityPage;