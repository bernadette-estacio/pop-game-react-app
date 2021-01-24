import React, { useState } from "react";
import Header from "../Context/Header/header";
import StartBtn from "../Figures/Start/start";
import GoodJob from "../Figures/GoodJob/goodJob";
import TimeUp from "../Figures/TimeUp/timeUp";
import Bubbles from "../Figures/Bubbles/bubbles";
import "./styles.scss";

const MainContent = () => {
  const [onPlay, setOnPlay] = useState(false);
  const [endPlay, setEndPlay] = useState(false);
  const [wonPlay, setWonPlay] = useState(false);

  return (
    <main>
      <Header onPlay={onPlay} setEndPlay={setEndPlay} wonPlay={wonPlay} />

      <StartBtn onPlay={onPlay} setOnPlay={setOnPlay} />

      <GoodJob wonPlay={wonPlay} />

      <TimeUp endPlay={endPlay} />

      <Bubbles
        onPlay={onPlay}
        endPlay={endPlay}
        wonPlay={wonPlay}
        setWonPlay={setWonPlay}
      />
    </main>
  );
};

export default MainContent;
