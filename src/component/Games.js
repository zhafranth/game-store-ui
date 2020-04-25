import React, { Component } from "react";
import GameItem from "./GameItem";
import { RoomContext } from "../Context";

export default class Games extends Component {
  static contextType = RoomContext;
  render() {
    let { gameItem, nameActive } = this.context;
    let tempGameItem = [...gameItem];
    let temp = tempGameItem.filter((item) => {
      return item.type === nameActive;
    });
    temp = temp.map((item) => {
      return (
        <GameItem
          image={item.image}
          name={item.name}
          developer={item.publisher}
          key={item.id}
        />
      );
    });
    console.log(temp);
    return (
      <div className="catgory">
        <h5>Action Games</h5>
        <div className="catgory-game">{temp}</div>
      </div>
    );
  }
}
