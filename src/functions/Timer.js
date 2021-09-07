import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0)
  const [isActive, setIsActive] = useState(true);
const gamePaused = useSelector((state) => state.game.gamePaused)
  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (!gamePaused) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (gamePaused && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gamePaused, seconds]);

  return (
    <div className="button-green">
       {minutes} : {seconds} 
    </div>
  );
};

export default Timer;