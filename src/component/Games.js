import React, { Component } from "react";
import GameItem from "./GameItem";
import Farcy from "../assets/farcry.jpg";

export default class Games extends Component {
  render() {
    return (
      <div className="catgory">
        <h5>Action Games</h5>
        <div className="catgory-game">
          <GameItem image={Farcy} name="Farcry" developer="Ubisoft" />
          <GameItem image={Farcy} name="Farcry" developer="Ubisoft" />
          <GameItem image={Farcy} name="Farcry" developer="Ubisoft" />
          <GameItem image={Farcy} name="Farcry" developer="Ubisoft" />
        </div>
      </div>
    );
  }
}
