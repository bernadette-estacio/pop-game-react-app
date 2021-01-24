import React from "react";
import Timer from "../Timer/timer";
import "./styles.scss";

const Header = ({ onPlay, setEndPlay, wonPlay }) => (
  <div className="instruction">
    <p>
      Some bubbles will make popped bubbles appear BUT there is one bubble that
      can pop everything!
    </p>
    <Timer onPlay={onPlay} setEndPlay={setEndPlay} wonPlay={wonPlay} />
  </div>
);

export default Header;
