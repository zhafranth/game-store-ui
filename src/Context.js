import React, { Component } from "react";
import items from "./Data";
import buttonItem from "./DataButton";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    gameItem: [],
    buttonData: [],
    tempData: [],
    active: null,
    nameActive: "action",
    showModal: false,
    idModal: null,
    valueModal: null,
  };
  // GetData
  componentDidMount() {
    let gameItem = this.formatData(items);
    let buttonData = this.formatDataButton(buttonItem);
    this.setState({ gameItem, buttonData });
  }
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let image = item.image;
      let game = { ...item.fields, id, image };
      return game;
    });
    return tempItems;
  }
  // End GetData
  // GetData Button
  formatDataButton(buttonItem) {
    let tempItems = buttonItem.map((item) => {
      let id = item.sys.id;
      let game = { ...item.fields, id };
      return game;
    });
    return tempItems;
  }
  // End GetData

  activeHandle = (id, name) => {
    this.setState({
      active: id,
      nameActive: name,
    });
    console.log(this.state.nameActive);
  };

  activeGameItem = (event) => {
    const target = event.currentTarget;
    console.log(target);
    console.log("cliked");
  };

  activeModal = (id, e) => {
    const target = e.target.value;
    this.setState({
      idModal: id,
      valueModal: target,
      showModal: true,
    });
    console.log(this.state.valueModal);
  };

  hideModal = (id, e) => {
    const target = e.target.value;
    this.setState({ idModal: id, valueModa: target, showModal: false });
    // console.log("click");
  };

  render() {
    // console.log(this.state.gameItem);
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          activeHandle: this.activeHandle,
          activeGameItem: this.activeGameItem,
          activeModal: this.activeModal,
          hideModal: this.hideModal,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
