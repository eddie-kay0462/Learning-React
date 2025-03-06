/* body{
    background-image: url(./assets/forestbg.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.clock-container{
    backdrop-filter: blur(2px);
    padding:10px 0;
}

.clock{
    color: white;
    font-size: 50px;
    font-family: monospace;
    font-weight: bold;
} */
import React, { useState, useEffect } from 'react';
function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function formatTime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    const twelveHourFormat = hours % 12 || 12;
    return `${padZero(twelveHourFormat)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  }

  return (
    <div className="clock-container">
     <span className='clock'>{formatTime()}</span>
    </div>
  );


}

export default DigitalClock;
 
//  In the above code, we have created a functional component  DigitalClock  that displays the current time. We have used the  useState  and  useEffect  hooks to update the time every second. 
//  Now, let’s use this component in the  App  component.