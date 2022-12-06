import React from "react";
import { useSelector } from "react-redux";


const Timeline = () => {

    const timeline = useSelector(state => state.timeline)
    const TimeLog = timeline.length > 0 ? timeline.map((log, i) => {
        return (
            <div key={i}>
                <h3>{log.name}</h3>
                <p> {log.description}</p>
                <span>  {log.date}</span>
            </div>
        )
    }) : ''
    return (
        <div>
            Timeline history:
            {TimeLog}

        </div>
    )
}

export default Timeline;