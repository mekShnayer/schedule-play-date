import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './List.css'

const Task = (props) => {
    const dispatch = useDispatch()
    const index = props.listIndex
    const { id, to_do, isDone } = props.task;

    const [done, setDone] = useState(isDone)
    //
    const lists = useSelector(state => state.listReducer.lists)// all the lists from the redux state
    let currentList = lists[index]

    const toggleDone = () => {
        setDone(!done)
        // console.log(done)
    }
    const deleteTask = (id) => {
        const filteredLists = lists.filter(list => list.id !== currentList.id)//all the list but the current list displayed.
        // arr.sort((a,b)=>a.id-b.id) // sorting array by index from low to high.
        const filteredTask = currentList.tasks.filter(task => task.id !== id); //filtering the deleted task from the task array.
        currentList = { ...lists[index], tasks: filteredTask } //updating the current list without the deleted task.

        const tempLists = [...filteredLists, currentList].sort((a, b) => a.id - b.id) //rearranging the lists with the new values and sorting them by id.
        dispatch({ type: 'DELETE_TASK', payload: tempLists })//dispatching the lists to the redux store.


    }

    const task =
        <div className="list-item">
            <div className="list-text">
                <input type="checkbox" id="item1" name='item1' onClick={() => toggleDone()}></input>
                <label htmlFor="item1" > {to_do}</label>
            </div>
            <button onClick={() => deleteTask(id)}>X</button>
        </div>



    return (
        <div className="list-item">
            {task}
        </div>
    )

}

export default Task;