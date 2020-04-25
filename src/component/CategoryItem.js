import React from "react";

export default function CategoryItem({ image, name, id, clicked, activated }) {
  return (
    <div className={activated} key={id} onClick={clicked}>
      <img src={image} alt="" />
      <h6>{name}</h6>
    </div>
  );
}
