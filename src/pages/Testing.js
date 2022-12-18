import React from "react";
import List from "../components/lists/List";
import { useSelector } from "react-redux";

const Testing = () => {
    const lists = useSelector(state => state.listReducer.lists)
    // console.log('testing', lists)
    const listsDisplay = lists.map((list, index) => {
        return (
            <List key={index} id={index} />
        )
    })
    return (
        <div>
            {/* <List /> */}
            {listsDisplay}
        </div>
    )
}

export default Testing;