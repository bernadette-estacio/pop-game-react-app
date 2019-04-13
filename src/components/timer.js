import React from "react";

const Timer = ({ timeLeft }) => {
  return (
    <div>
      <p className="messageFont">You have 30 seconds to pop all the bubbles.</p>

      <p className="timer">
        Time Left:{" "}
        <strong>
          <span id="countDown">{timeLeft}</span>{" "}
        </strong>
        sec
      </p>
    </div>
  );
};

export default Timer;
