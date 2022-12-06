import React from 'react'
import { useDispatch } from 'react-redux';
import './styles/LogOut.css'

const LogOut = () => {
    const dispatch = useDispatch()
    return (
        <div className='log-out'>
            <button className='log-out' onClick={() => dispatch({ type: 'LOGOUT' })}>Log Out</button>
        </div>
    )
}

export default LogOut;