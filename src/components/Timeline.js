import React from "react";
import { useSelector } from "react-redux";
import './styles/Timeline.css'

const Timeline = () => {

    const timeline = useSelector(state => state.activityReducer.timeline)
    const TimeLog = timeline.length > 0 ? timeline.map((log, i) => {
        return (
            <div className="log" key={i}>
                <h3>{log.name}</h3>
                <p> {log.description}</p>
                <span>  {log.date}</span>
            </div>
        )
    }) : 'no activities has been logged'

    return (
        <div className="timeline-log-container ">
            {TimeLog}
        </div>
    )
}

export default Timeline;