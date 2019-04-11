import React from "react";
import Timer from "./timer";
import Bubbles from "./bubbles";
import start from "../img/start.png";

const MainContent = props => {
  let instructionClass = props.instruction ? " visible" : " invisible";
  let startClass = props.startButton ? "yesDisplay" : "noDisplay";
  let goodJobClass = props.goodjob ? " visible" : " invisible";
  let timeUPClass = props.timeUP ? " visible" : " invisible";
  return (
    <main>
      <div className={"row" + instructionClass} id="instruction">
        <p>
          Some bubbles will make popped bubbles appear BUT there is one bubble
          that can pop everything!
        </p>

        <Timer timeLeft={props.timeLeft} />
      </div>

      <div>
        <img
          src={start}
          alt="START"
          className={startClass}
          id="startButton"
          width="80"
          onClick={props.startGame}
        />
      </div>

      {/* Winner Image */}
      <div className={"goodJob" + goodJobClass} />

      {/* Time is Up Image */}
      <div className={"timeUP" + timeUPClass} />

      <Bubbles
        bubblesList={props.bubblesList}
        allBubbles={props.allBubbles}
        clickBubble={props.clickBubble}
      />
    </main>
  );
};

export default MainContent;
