import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Lists from "../components/lists/Lists";
import './Profile.css'
import AddActivity from "../components/AddActivity";
import ActivityList from "../components/ActivityList";

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.loginReducer.user)
    const stateInfo = useSelector(state => state.infoReducer)
    const localState = useSelector(state => state) //for local storage
    useEffect(() => {
        console.log('use effect')//
        return () => { localStorage.setItem('state', JSON.stringify(localState)) }
    })

    const childInfo = stateInfo.info
    const [info, setInfo] = useState({
        childName: '',
        age: '',
        friends: []
    })

    const updateInput = (event) => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })
    }
    const addFriend = () => {
        const friend = document.getElementById('friend').value
        console.log(friend)
        setInfo({ ...info, friends: [...info.friends, friend] })
        document.getElementById('friend').value = ''
    }
    const save = () => {
        dispatch({ type: 'ADD_CHILD', payload: { ...info } })
    }
    return (
        <div className="page">
            <div className="child-info">
                <div className="info-container">
                    <div className="greet">
                        <h4 >Hello {user.userName}</h4>
                    </div>
                    <div className="child-details">
                        <p>Child: {childInfo.childName} </p>
                        <p>Age: {childInfo.age}</p>
                        <div>
                            friends:{childInfo.friends.length > 0 && childInfo.friends.map((el, i) => <div key={i}>{el}</div>)}
                        </div>
                    </div>

                </div>
                <div className="add-child-info-container">
                    <h4>Add Child Info</h4>
                    <input className="add-info" placeholder="child name" name='childName' value={info.childName} onChange={updateInput}></input>
                    <input className="add-info" placeholder="age" name='age' value={info.age} onChange={updateInput}></input>
                    {/* <div className="add-info"> */}
                    <input className="add-info" placeholder="friends" name='friends'
                        id='friend'></input>
                    <button onClick={addFriend}>Add friend</button>
                    {/* </div> */}
                    <button onClick={save}>Save</button>

                </div>
            </div>
            <div className="activities">
                <h3>Activities</h3>
                <AddActivity />
                <ActivityList />
            </div>
            <div className="lists">
                <h3>Lists</h3>
                <Lists />
            </div>
        </div>
    )
}

export default Profile;