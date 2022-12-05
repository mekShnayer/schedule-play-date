import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    // const child = useSelector(state => state.info.child)
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
    }
    const save = () => {
        dispatch({ type: 'ADD_CHILD', payload: { ...info } })
    }
    return (
        <div>
            <div className="info-container">
                <h4>Hello {user.userName}</h4>
                <p>{info.childName} </p>
                <p>{info.age}</p>
                <p> friends:{info.friends.map(el=><p>{el}</p>)} </p>
            </div>


            <div className="add-child-info-container">
                <h4>Add Child Info</h4>
                <input placeholder="child name" name='childName' value={info.childName} onChange={updateInput}></input>
                <input placeholder="age" name='age' value={info.age} onChange={updateInput}></input>
                <div>
                    <input placeholder="friends" name='friends'
                        id='friend'></input>
                    <button onClick={addFriend}>add friend</button>
                </div>


                <button onClick={save}>save</button>

            </div>

        </div>
    )
}

export default Profile;