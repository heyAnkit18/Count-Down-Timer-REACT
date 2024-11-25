import React from 'react';
import './TimerInt.css'; // Include a CSS file for styling

const TimerInt = ({ onReqTimerStart }) => {
    return (
        <div className="timer-input-container">
            <label htmlFor="time-count" className="input-label">
                Enter Time in Seconds
            </label>
            <input
                type="number"
                id="time-count"
                className="styled-input"
                placeholder="Enter time in secs"
                onKeyDown={(e) => {
                    if (e.keyCode === 13 || e.which === 13) {
                        onReqTimerStart && onReqTimerStart(Math.floor(e.target.value));
                    }
                }}
            />
        </div>
    );
};

export default TimerInt;
