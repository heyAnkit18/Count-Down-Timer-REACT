import React from 'react';
import TimerInt from './TimerInt';
import { useState } from 'react';
import './CountDown.css'; 

const CountDown = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const startNewTimer = () => {
        setIntervalId(
            setInterval(() => {
                setCurrentTime((currentTime) => {
                    if (currentTime > 0) {
                        return currentTime - 1;
                    }
                    destroyExistingTimer();
                    return currentTime;
                });
            }, 1000)
        );
    };

    const destroyExistingTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const startTimer = (timeInSec) => {
        console.log(`Start timer with ${timeInSec} seconds`);
        destroyExistingTimer();
        setCurrentTime(timeInSec);
        startNewTimer();
    };

    return (
        <div id="count-down-app" className="countdown-container">
            <h1 className="app-title">⏳ Count-Down Timer</h1>
            <TimerInt onReqTimerStart={startTimer} />
            <div id="current-time" className="timer-display">
                {currentTime > 0 ? (
                    <span>{currentTime}s</span>
                ) : (
                    <span className="timer-end">Time's Up! 🎉</span>
                )}
            </div>
            <button
                className="reset-button"
                onClick={() => {
                    destroyExistingTimer();
                    setCurrentTime(0);
                }}
            >
                Reset Timer
            </button>
        </div>
    );
};

export default CountDown;
