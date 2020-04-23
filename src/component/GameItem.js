import React, { Component } from "react";

export default class GameItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { image, name, developer } = this.props;
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
}
