// import React, { Component } from "react";

// export default class CategoryItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeClass: false,
//     };
//   }
//   handleToggle = () => {
//     this.setState({
//       activeClass: !this.state.activeClass,
//     });
//   };
//   render() {
//     const { image, name, id } = this.props;
//     return (
//       <div className="catgory-item" key={id}>
//         <img src={image} alt="" />
//         <h6>{name}</h6>
//       </div>
//     );
//   }
// }

import React from "react";

export default function CategoryItem({ image, name, id, clicked, activated }) {
  return (
    <div className={activated} key={id} onClick={clicked}>
      <img src={image} alt="" />
      <h6>{name}</h6>
    </div>
  );
}
