import React, { Component } from "react";
import GameItem from "./GameItem";
import { RoomContext } from "../Context";
import Modal from "./Modal";

export default class Games extends Component {
  static contextType = RoomContext;
  // clickedItem = (e) => {
  //   const tar = e.target;
  //   console.log(tar);
  // };

  render() {
    let { gameItem, nameActive, activeModal, valueModal } = this.context;
    let tempGameItem = [...gameItem];
    let temp = tempGameItem.filter((item) => {
      return item.type === nameActive;
    });
    temp = temp.map((item) => {
      return (
        <>
          <GameItem
            image={item.image}
            name={item.name}
            developer={item.publisher}
            key={item.id}
            id={item.id}
            clickButtonModal={(e) => activeModal(item.id, e)}
          />
          {/* <button onClick={(e) => activeModal(item.id, e)} value={item.id}>
            Open
          </button> */}
          <Modal
            handleClose={(e) => activeModal(item.id, e)}
            value={item.id}
            show={item.id === valueModal}
            id={item.id}
            title={item.name}
            description={item.desc}
            modalImage={item.image}
            publisherModal={item.publisher}
            genreModal={nameActive}
          />
        </>
      );
    });
    // console.log(tempGameItem);
    return (
      <div className="catgory">
        <h5>{nameActive} games</h5>
        <div className="catgory-game">{temp}</div>
      </div>
    );
  }
}
