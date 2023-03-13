import React from 'react'
import { useDispatch } from 'react-redux';
import './styles/LogOut.css'
import { Link } from 'react-router-dom';
const LogOut = () => {
    const dispatch = useDispatch()

    return (
        <div className='log-out'>
            <Link to={'/'} className='navbar-brand' >
                <i className='fa fa-home fa-1x' />
                <button className='log-out' onClick={() => dispatch({ type: 'LOGOUT' })}>Log Out</button>
            </Link>
        </div>
    )
}

export default LogOut;