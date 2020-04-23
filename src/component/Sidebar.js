import React, { Component } from "react";
import "../App.css";
// import Button from "./Button";
// icons
import { FaShoppingBag, FaBookmark } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdGroup } from "react-icons/md";

export default class Sidebar extends Component {
  state = {
    active: false,
  };
  handleToggle = (e) => {
    this.setState({ active: !this.state.active });
  };
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li onClick={this.handleToggle} data-id="1">
            <button className="btn-active">
              <FaShoppingBag className="icon" />
              Store
            </button>
          </li>
          <li onClick={this.handleToggle} data-id="2">
            <button>
              <FaNewspaper className="icon" />
              News
            </button>
          </li>
          <li onClick={this.handleToggle} data-id="3">
            <button>
              <FaCloudDownloadAlt className="icon" />
              Downloads
            </button>
          </li>
          <li onClick={this.handleToggle} data-id="4">
            <button>
              <FaBookmark className="icon" />
              Library
            </button>
          </li>
          <li onClick={this.handleToggle} data-id="5">
            <button>
              <MdGroup className="icon" />
              Community
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
