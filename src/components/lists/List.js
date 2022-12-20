import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './List.css'
import Task from "./Task";


const List = (props) => {

    const localState = useSelector(state => state) //for local storage
    // console.log('list local state', localState)
    useEffect(() => {
        // console.log('use effect')//
        return () => {localStorage.setItem('state', JSON.stringify(localState)) }
    })

    const dispatch = useDispatch();
    const listIndex = props.id;
    const listsArr = useSelector(state => state.listReducer.lists)
    // const id = listIndex + 1;
    let currentList = listsArr[listIndex]
    const tasksArr = currentList.tasks

    const tasksDisplay = tasksArr.map((task, i) => {
        return (
            <Task task={task} key={i} listIndex={listIndex} />
        )
    })

    const addTask = () => {

        const input = document.querySelector(`#add-${listIndex}`)
        //
        const newTask = {
            id: tasksArr.length + 1,
            to_do: input.value,
            isDone: false
        }
        //
        const filteredLists = listsArr.filter(list => list.id !== currentList.id)//all the list but the current list displayed.

        currentList = { ...listsArr[listIndex], tasks: [...tasksArr, newTask] } //updating the current list without the deleted task.

        const tempLists = [...filteredLists, currentList].sort((a, b) => a.id - b.id) //rearranging the lists with the new values and sorting them by id.
        dispatch({ type: 'ADD_TASK', payload: tempLists })//dispatching the lists to the redux store.


        input.value = ''
    }
    const deleteList = (id) => {
        console.log(id)
        const filteredLists = listsArr.filter(list => list.id != id)

        dispatch({ type: 'DELETE_LIST', payload: filteredLists })
    }
    return (
        <div className="list-container">
            <div className="list-head">
                <h2>{currentList.list_name}</h2>
                <div className="head-input">
                    <input type='text' placeholder='type something to do...' id={`add-${listIndex}`}></input>
                    <button onClick={addTask} >Add</button>
                </div>
            </div>
            <div className="list-body">
                {tasksDisplay}
            </div>
            <button onClick={() => deleteList(currentList.id)}>Delete List</button>
        </div>
    )

}

export default List;