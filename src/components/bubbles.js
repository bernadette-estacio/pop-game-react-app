import React from "react";
import bubbleImg from "../img/bubble.jpg";

const Bubbles = ({ allBubbles, bubblesList, clickBubble }) => {
  let allBubblesClass = allBubbles ? "yesDisplay " : "noDisplay ";
  return (
    <div id="allBubbles">
      {bubblesList.map((bubble, i) => (
        <div key={i}>
          <img
            src={bubbleImg}
            alt="bubble"
            id={bubble.id}
            className={allBubblesClass + bubble.visibility}
            onClick={clickBubble}
            unselectable="on"
          />
        </div>
      ))}
    </div>
  );
};

export default Bubbles;
