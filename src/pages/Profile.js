import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Lists from "../components/lists/Lists";
import './Profile.css'
import { Link } from "react-router-dom";
import ChildInfo from "../components/ChildInfo";
import ActivityPage from './ActivityPage'
const Profile = () => {

    const user = useSelector(state => state.loginReducer.user)
    const localState = useSelector(state => state) //for local storage
    useEffect(() => {
        console.log('use effect')//
        return () => { localStorage.setItem('state', JSON.stringify(localState)) }
    })


    return (
        <div className="page">
            {/* <div className="profile-section-nav">
                <Link to={'/profile/activities'} className='navbar-brand'> activities</Link>
                <Link to={'/profile/lists'} className='navbar-brand'> Lists</Link>
            </div> */}
            <ActivityPage />
            <Lists />
            <ChildInfo />

        </div >
    )
}

export default Profile;