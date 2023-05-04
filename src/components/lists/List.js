import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './List.css'
import Task from "./Task";
import delete_icon from './delete_icon.png'

const List = (props) => {

    const localState = useSelector(state => state)
    useEffect(() => {
        return () => { localStorage.setItem('state', JSON.stringify(localState)) }
    })
    const [isOpen, toggleIsOpen] = useState(props.opened)
    console.log(isOpen)
    const dispatch = useDispatch();
    const listIndex = props.id;
    const listsArr = useSelector(state => state.listReducer.lists)
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
            {isOpen ? <div>
                <span className="close-list-span" onClick={() => toggleIsOpen(state => !state)}>-</span>
                <div className="list-head">
                    <h2>{currentList.list_name}</h2>
                    <div className="head-input">
                        <input className="add-task-input" type='text' placeholder='type something to do...' id={`add-${listIndex}`} ></input>
                        <button onClick={addTask} className="add-task-button">ADD</button>
                    </div>
                </div>
                <div className="list-body">
                    {tasksDisplay}
                </div>
                <div className="tooltip">
                    <img className="delete-list-icon" src={delete_icon} width="30px" onClick={() => deleteList(currentList.id)}></img>
                    <span className="tooltip-text">Delete list</span>
                </div>
            </div>
                : <div>
                    <span className="close-list-span" onClick={() => toggleIsOpen(state => !state)}>-</span>
                    <h2>{currentList.list_name}</h2>
                </div>}


        </div>
    )

}

export default List;