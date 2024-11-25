import React from 'react';
const TimerInt = ({onReqTimerStart}) => {
   
  return (
    <div>
        <label htmlFor='time-count'>Enter Time in seconds</label>
        <input type='number' id='time-count' placeholder='Enter Time in secs'
        onKeyDown={(e)=>{
            
            if(e.keyCode===13 || e.which===13){
                onReqTimerStart && onReqTimerStart(Math.floor(e.target.value))
            }

        }}
        />
    </div>
  )
}

export default TimerInt