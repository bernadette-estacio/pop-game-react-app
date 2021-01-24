import React, { useState, useEffect } from "react";
import "./styles.scss";

const Timer = ({ onPlay, setEndPlay, wonPlay }) => {
  const [timeLeft, setTimeLeft] = useState(30); //Set to 30

  useEffect(() => {
    if (onPlay) {
      const countDown = setInterval(() => {
        if (wonPlay) {
          clearInterval(countDown);
        } else if (timeLeft === 0) {
          setEndPlay(true);
          clearInterval(countDown);
        } else {
          setTimeLeft(timeLeft - 1);
        }
      }, 1000);
      return () => {
        clearInterval(countDown);
      };
    }
  }, [onPlay, wonPlay, timeLeft]);

  return (
    <div>
      <p>You have 30 seconds to pop all the bubbles.</p>

      <p className="timer">
        Time Left:
        <strong>
          <span className="countDown"> {timeLeft}</span>
        </strong>
      </p>
    </div>
  );
};

export default Timer;
