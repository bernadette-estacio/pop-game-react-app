import React from "react";
import Timer from "./timer";
import Bubbles from "./bubbles";
import start from "../img/start.png";

const MainContent = ({
  instruction,
  timeLeft,
  startButton,
  startGame,
  goodjob,
  timeUP,
  bubblesList,
  allBubbles,
  clickBubble
}) => {
  let instructionClass = instruction ? " visible" : " invisible";
  let startClass = startButton ? "yesDisplay" : "noDisplay";
  let goodJobClass = goodjob ? " visible" : " invisible";
  let timeUPClass = timeUP ? " visible" : " invisible";
  return (
    <main>
      <div className={"row" + instructionClass} id="instruction">
        <p className="messageFont">
          Some bubbles will make popped bubbles appear BUT there is one bubble
          that can pop everything!
        </p>

        <Timer timeLeft={timeLeft} />
      </div>

      <div>
        <img
          src={start}
          alt="START"
          className={startClass}
          id="startButton"
          width="80"
          onClick={startGame}
        />
      </div>

      {/* Winner Image */}
      <div className={"goodJob" + goodJobClass} />

      {/* Time is Up Image */}
      <div className={"timeUP" + timeUPClass} />

      <Bubbles
        bubblesList={bubblesList}
        allBubbles={allBubbles}
        clickBubble={clickBubble}
      />
    </main>
  );
};

export default MainContent;
