import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../styles/List.css'
import Task from "./Task";


const List = () => {


    const dispatch = useDispatch();
    const list = useSelector(state => state.listReducer.list)
    const [listArr, setListArr] = useState(list.tasks)//
    const listDisplay = list.tasks.map((task, i) => {
        return (
            <Task task={task} key={i} />
        )
    })
    const addTask = () => {
        const input = document.querySelector('input')
        dispatch({
            type: 'ADD_TASK', payload:
            {
                id: list.tasks.length + 1,
                to_do: input.value,
                isDone: false
            }

        })
        input.value = ''
    }
    return (
        <div className="list-container">
            <div className="list-head">
                <h2>list name</h2>
                <div>
                    <input type='text' placeholder='type something to do...'></input>
                    <button onClick={addTask}>add</button>
                </div>
            </div>
            <div className="list-body">
                {listDisplay}
            </div>
        </div>
    )

}

export default List;