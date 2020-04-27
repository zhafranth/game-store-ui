import React from "react";

export default function GameItem({
  image,
  name,
  developer,
  clicked,
  id,
  activeModal,
  hideModal,
  showModal,
  titleModal,
  clickButtonModal,
}) {
  return (
    <div className="game-item">
      <img src={image} alt="" />
      <div className="game-konten">
        <h4>{name}</h4>
        <span>{developer}</span>
      </div>
      <button className="play-btn" onClick={clickButtonModal} value={id}>
        Go
      </button>
    </div>
  );
}
