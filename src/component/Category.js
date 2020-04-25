import React, { Component } from "react";
import { RoomContext } from "../Context";
import CategoryItem from "./CategoryItem";

export default class Category extends Component {
  static contextType = RoomContext;

  // activeHandle = (id, name) => {
  //   this.setState({ active: id, nameActive: name });
  //   console.log(name);
  // };

  render() {
    let { buttonData, activeHandle, active } = this.context;
    // console.log(buttonData);
    return (
      <div className="catgory">
        <h5>Catgories</h5>
        <div className="catgory-container">
          {buttonData.map((item) => {
            return (
              <CategoryItem
                key={item.id}
                clicked={() => activeHandle(item.id, item.name)}
                activated={
                  item.id === active
                    ? "catgory-item catgory-active"
                    : "catgory-item"
                }
                image={item.image}
                name={item.name}
              />
            );
          })}
          {/* <CategoryItem onClick={this.activeHandle()=>{
            this.setState({active: !this.state.active})
          }} */}
          {/* <CategoryItem
            image={this.state.genre[0].gambar}
            name={this.state.genre[0].name}
          />
          <CategoryItem
            image={this.state.genre[0].gambar}
            name={this.state.genre[0].name}
          />
          <CategoryItem
            image={this.state.genre[0].gambar}
            name={this.state.genre[0].name}
          />
          <CategoryItem
            image={this.state.genre[0].gambar}
            name={this.state.genre[0].name}
          />
          <CategoryItem
            image={this.state.genre[0].gambar}
            name={this.state.genre[0].name}
          /> */}

          {/* <div
            className={
              this.state.active ? "catgory-item catgory-active" : "catgory-item"
            }
            onClick={
              (this.hadleToggle = () => {
                return this.setState({ active: !this.state.active });
              })
            }
          >
            <img src={this.state.genre[0].gambar} alt="" />
            <h6>{this.state.genre[0].name}</h6>
          </div>
          <div
            className={
              this.state.active ? "catgory-item catgory-active" : "catgory-item"
            }
            onClick={
              (this.hadleToggle = () => {
                return this.setState({ active: !this.state.active });
              })
            }
          >
            <img src={this.state.genre[1].gambar} alt="" />
            <h6>{this.state.genre[1].name}</h6>
          </div>
          <div
            className={
              this.state.active ? "catgory-item catgory-active" : "catgory-item"
            }
            onClick={
              (this.hadleToggle = () => {
                return this.setState({ active: !this.state.active });
              })
            }
          >
            <img src={this.state.genre[2].gambar} alt="" />
            <h6>{this.state.genre[2].name}</h6>
          </div>
          <div
            className={
              this.state.active ? "catgory-item catgory-active" : "catgory-item"
            }
            onClick={
              (this.hadleToggle = () => {
                return this.setState({ active: !this.state.active });
              })
            }
          >
            <img src={this.state.genre[3].gambar} alt="" />
            <h6>{this.state.genre[3].name}</h6>
          </div>
          <div
            className={
              this.state.active ? "catgory-item catgory-active" : "catgory-item"
            }
            onClick={
              (this.hadleToggle = () => {
                return this.setState({ active: !this.state.active });
              })
            }
          >
            <img src={this.state.genre[4].gambar} alt="" />
            <h6>{this.state.genre[4].name}</h6>
          </div>*/}
        </div>
      </div>
    );
  }
}
