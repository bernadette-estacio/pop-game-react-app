import React, { useState, useEffect } from "react";
import bubbleImg from "../../../img/bubble.jpg";
import "./styles.scss";

const Bubbles = ({ onPlay, endPlay, wonPlay, setWonPlay }) => {
  const [bubblesList, setBubblesList] = useState([]);
  const [pickedBubble, setPickedBubble] = useState(null); // Randomly select the burst-all bubble
  const [triggerBubbles, setTriggerBubbles] = useState([]); // Trigger show bubbles
  const [allBubblesShow, setallBubblesShow] = useState(true);
  let visibility = allBubblesShow ? "yesDisplay " : "noDisplay ";
  const totalNumBubbles = 64;

  console.log("Burst All:", pickedBubble);
  console.log("Trigger bubbles", triggerBubbles);

  // Start game
  useEffect(() => {
    if (onPlay) {
      setPickedBubble(
        "bubble" + Math.floor(Math.random() * totalNumBubbles + 1)
      );

      const newBubblesList = [];
      for (let i = 1; i <= totalNumBubbles; i++) {
        const bubble = { id: "bubble" + i, visibility: "visible" };
        newBubblesList.push(bubble);
      }
      setBubblesList(newBubblesList);

      const newTriggerBubbles = [];
      for (let i = 0; i < 7; i++) {
        newTriggerBubbles.push(
          "bubble" + Math.floor(Math.random() * totalNumBubbles + 1)
        );
      }
      setTriggerBubbles(newTriggerBubbles);
    }
  }, [onPlay]);

  const clickBubbleHandle = (ev) => {
    const clickedBubble = ev.currentTarget.id;
    if (clickedBubble === pickedBubble) {
      setWonPlay(true);
    } else if (triggerBubbles.indexOf(clickedBubble) >= 0) {
      showBubblesHandle(clickedBubble);
    } else {
      bubbleHandle(clickedBubble);
    }
  };

  const bubbleHandle = (clickedBubble) => {
    const newBubblesList = [...bubblesList];
    hideBubbleHandle(clickedBubble, newBubblesList);
  };

  // Show new bubbles from triggered bubble
  const showBubblesHandle = (clickedBubble) => {
    // Random select bubbles to show
    const showListBubbles = [];
    for (let i = 0; i < 7; i++) {
      showListBubbles.push(Math.floor(Math.random() * totalNumBubbles));
    }
    const newBubblesList = [...bubblesList];
    showListBubbles.forEach((bubble, i) => {
      const index = bubble;
      newBubblesList[index] = { ...newBubblesList[index] };
      newBubblesList[index].visibility = "visible";
    });
    hideBubbleHandle(clickedBubble, newBubblesList);
  };

  // Hide clicked bubble
  const hideBubbleHandle = (clickedBubble, bubblesArr) => {
    const bubble = bubblesArr.find((b) => b.id === clickedBubble);
    const index = bubblesArr.indexOf(bubble);
    bubblesArr[index] = { ...bubblesArr[index] };
    bubblesArr[index].visibility = "invisible";
    setBubblesList(bubblesArr);
  };

  useEffect(() => {
    if (endPlay || wonPlay) {
      setallBubblesShow(false);
    }
  }, [endPlay, wonPlay]);

  return (
    <div className="allBubbles">
      {bubblesList.map((bubble) => (
        <div className="bubble-container" key={bubble.id}>
          <img
            src={bubbleImg}
            alt="bubble"
            id={bubble.id}
            className={visibility + bubble.visibility}
            onClick={clickBubbleHandle}
            unselectable="on"
          />
        </div>
      ))}
    </div>
  );
};

export default Bubbles;
