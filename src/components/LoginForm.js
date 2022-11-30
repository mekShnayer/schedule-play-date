import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'




const LoginForm = () => {
    const isLogedIn = useSelector(state => state.isLogedIn)
    const dispatch = useDispatch()
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
        console.log(state.user)
        dispatch({ type: 'TOGGLE_LOGIN' })
    }
    return (
        <div className="container/card">
            <div className="header">
                <h1>Please Login Here</h1>
            </div>
            <div className="form-body">
                <form onSubmit={login}>
                    <div>
                        <input type='text' placeholder="user name" name='username' value={state.user.username} onChange={updateInput}></input>
                    </div>
                    <div>
                        <input type='password' placeholder="password" name='password' value={state.user.password} onChange={updateInput}></input>
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