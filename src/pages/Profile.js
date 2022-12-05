import React from "react";
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
    // const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    return (
        <div>
            
            <h4>name: {user.userName}</h4>
        </div>
    )
}

export default Profile;