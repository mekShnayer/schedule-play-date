import React, { useEffect } from "react";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";

const Lists = () => {
    const dispatch = useDispatch();
    const lists = useSelector(state => state.listReducer.lists)

    const localState = useSelector(state => state) //for local storage
    useEffect(() => {
        // console.log('use effect')//
        return () => { localStorage.setItem('state', JSON.stringify(localState)) }
    })

    const listsDisplay = lists.map((list, index) => {
        return (
            <List key={index} id={index} />
        )
    })

    const addList = () => {
        const value = document.querySelector('#add-list-input').value;
        const newList = {
            id: lists.length + 1,
            list_name: value,
            tasks: []
        }
        dispatch({ type: 'ADD_LIST', payload: [...lists, newList] })
    }

    return (
        <div className="">
            <div className="add-list-container">
                <input placeholder="list name" id='add-list-input'></input>
                <button onClick={addList}>Add List</button>
            </div>
            <div className="lists-container">
                {listsDisplay}
            </div>

        </div>
    )
}

export default Lists;