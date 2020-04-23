import React, { Component } from "react";
import Action from "../assets/action.png";
import Adventure from "../assets/adventure.png";
import Racing from "../assets/driving.png";
import Simulation from "../assets/race.png";
import Sport from "../assets/sport.png";
import CategoryItem from "./CategoryItem";

export default class Category extends Component {
  state = {
    genre: [
      { name: "action", gambar: Action, id: 1 },
      { name: "adventure", gambar: Adventure, id: 2 },
      { name: "racing", gambar: Racing, id: 3 },
      { name: "simulation", gambar: Simulation, id: 4 },
      { name: "sport", gambar: Sport, id: 5 },
    ],
    active: null,
  };

  activeHandle = (id) => {
    this.setState({ active: id });
    console.log(this.state.active);
  };

  render() {
    const { genre, active } = this.state;
    return (
      <div className="catgory">
        <h5>Catgories</h5>
        <div className="catgory-container">
          {genre.map((item) => {
            return (
              <CategoryItem
                key={item.id}
                clicked={() => this.activeHandle(item.id)}
                activated={
                  item.id === active
                    ? "catgory-item catgory-active"
                    : "catgory-item"
                }
                image={item.gambar}
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
