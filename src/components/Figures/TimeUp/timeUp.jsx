import React from "react";
import "./styles.scss";

const TimeUp = ({ endPlay }) => (
  <div className={`timeUP + ${endPlay ? " visible" : " invisible"}`} />
);

export default TimeUp;
