import React from "react";
import "./styles.scss";

const GoodJob = ({ wonPlay }) => {
  return <div className={`goodJob + ${wonPlay ? " visible" : " invisible"}`} />;
};

export default GoodJob;
