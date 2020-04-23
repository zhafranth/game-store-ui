import React, { Component } from "react";
import GameItem from "./GameItem";
import { RoomContext } from "../Context";

export default class Games extends Component {
  static contextType = RoomContext;
  render() {
    let { gameItem } = this.context;
    gameItem = gameItem.map((item) => {
      return (
        <GameItem
          image={item.image}
          name={item.name}
          developer={item.publisher}
          key={item.id}
        />
      );
    });
    console.log(gameItem);
    return (
      <div className="catgory">
        <h5>Action Games</h5>
        <div className="catgory-game">{gameItem}</div>
      </div>
    );
  }
}
