import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../styles/List.css'

const Task = (props) => {
    const dispatch = useDispatch()
    const { id, to_do, isDone, list_name } = props.task;
    const tasksArr = useSelector(state => state.listReducer.list.tasks)
    const [done, setDone] = useState(isDone)

    const toggleDone = () => {
        setDone(!done)
        console.log(done)
    }
    const deleteTask = (id) => {
        //delete task from list
        const newTaskArr = tasksArr.filter(el => el.id != id)
        console.log('delete task ' + id + ' from list')
        // dispatch({ type: 'DELETE_TASK', payload: id })
        console.log(newTaskArr)
        dispatch({ type: 'DELETE_TASK', payload: newTaskArr })
    }







    const task =
        <div className="list-item" >
            <div>
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