import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import './styles/LoginForm.css'
import Logo from "./Logo";
const LoginForm = () => {
    const localstate = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => localStorage.setItem('state', JSON.stringify(localstate))
    })

    const [state, setState] = useState({
        user: {
            username: '',
            password: ''
        }
    })

    const updateInput = (event) => {
        setState({
            user: {
                ...state.user,
                [event.target.name]: event.target.value
            }
        })
    }

    const login = (event) => {
        event.preventDefault();
        dispatch({ type: 'LOGIN', payload: state.user.username })
    }
    return (
        <div className="log-in-container glassmorphism">
             <Logo />
            <div className="header">
                <h3>Please Login Here</h3>
            </div>
            <div className="form-body">
                <form onSubmit={login}>
                    <div>
                        <input type='text' placeholder="user name" name='username' value={state.user.username} onChange={updateInput} required></input>
                    </div>
                    <div>
                        <input type='password' placeholder="password" name='password' value={state.user.password} onChange={updateInput} required></input>
                    </div>
                    <div>
                        <input type='submit' value='login'></input>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default LoginForm;