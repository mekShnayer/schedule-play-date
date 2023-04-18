import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './List.css'

const Task = (props) => {
    const dispatch = useDispatch()
    const index = props.listIndex
    const { id, to_do, isDone } = props.task;
    const localState = useSelector(state => state)
    useEffect(() => {
        return () => { console.log('unmounting task'); localStorage.setItem('state', JSON.stringify(localState)) }
    })

    //
    const [done, setDone] = useState(isDone)
    //
    const lists = useSelector(state => state.listReducer.lists)
    let currentList = lists[index]

    const toggleDone = () => {
        setDone(!done)
    }
    const deleteTask = (id) => {
        const filteredLists = lists.filter(list => list.id !== currentList.id)
        const filteredTask = currentList.tasks.filter(task => task.id !== id); 
        currentList = { ...lists[index], tasks: filteredTask }

        const tempLists = [...filteredLists, currentList].sort((a, b) => a.id - b.id)
        dispatch({ type: 'DELETE_TASK', payload: tempLists })
    }

    const task =
        <div className="list-item tooltip">
            <div className="list-text ">
                <input type="checkbox" id="checkbox-1-1" class="regular-checkbox" onClick={() => toggleDone()} />
                <label htmlFor="item1" > {to_do}</label>
            </div>
            <span className="tooltip-text" onClick={() => deleteTask(id)}>Delete</span>
        </div >

    return (
        <div className="list-item">
            {task}
        </div>
    )

}

export default Task;