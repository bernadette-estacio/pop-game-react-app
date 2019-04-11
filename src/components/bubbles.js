import React from "react";
import bubbleImg from "../img/bubble.jpg";

const Bubbles = props => {
  let allBubblesClass = props.allBubbles ? "yesDisplay " : "noDisplay ";
  return (
    <div id="allBubbles">
      {props.bubblesList.map((bubble, i) => (
        <div key={i}>
          <img
            src={bubbleImg}
            alt="bubble"
            id={bubble.id}
            className={allBubblesClass + bubble.visibility}
            onClick={props.clickBubble}
            unselectable="on"
          />
        </div>
      ))}
    </div>
  );
};

export default Bubbles;
