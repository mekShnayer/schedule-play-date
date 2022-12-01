import React from 'react'
import { useDispatch } from 'react-redux';

const LogOut = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch({ type: 'LOGOUT' })}>Log Out</button>
        </div>
    )
}

export default LogOut;