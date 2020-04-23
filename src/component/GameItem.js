import React from "react";

export default function GameItem({ image, name, developer }) {
  return (
    <div className="game-item">
      <img src={image} alt="" />
      <div className="game-konten">
        <h3>{name}</h3>
        <span>{developer}</span>
      </div>
      <div className="play-btn">
        <span>Go</span>
      </div>
    </div>
  );
}
