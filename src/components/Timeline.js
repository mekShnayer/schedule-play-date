import React from "react";
import { useSelector } from "react-redux";
import './styles/Timeline.css'

const Timeline = () => {

    const timeline = useSelector(state => state.timeline)
    const TimeLog = timeline.length > 0 ? timeline.map((log, i) => {
        return (
            <div className="log" key={i}>
                <h3>{log.name}</h3>
                <p> {log.description}</p>
                <span>  {log.date}</span>
            </div>
        )
    }) : ''
    return (
        <div className="timeline-container">
            {/* Timeline history: */}
            {TimeLog}

        </div>
    )
}

export default Timeline;