import React from "react";
import "../styles/About.css";

const ThreeDBall = ({ imagePath }) => {
  return (
    <div className="tech-sphere">
      <img
        src={require(`../assets/images/${imagePath}`)}
        alt=""
        className="tech-icon"
      />
    </div>
  );
};

export default ThreeDBall;

