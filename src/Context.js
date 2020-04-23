import React, { Component } from "react";
import items from "./Data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    gameItem: [],
  };
  // GetData
  componentDidMount() {
    let gameItem = this.formatData(items);
    this.setState({ gameItem });
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
  render() {
    console.log(this.state.gameItem);
    return (
      <RoomContext.Provider value={{ ...this.state }}>
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
