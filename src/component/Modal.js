import React from "react";

export default function Modal({ handleClose, show, description, title, id }) {
  const showHideClose = show ? "modal display-block" : "modal display-none";
  // console.log(show);
  return (
    <div className={showHideClose}>
      <section className="modal-main">
        <h5>{title}</h5>
        <p>{description}</p>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
}

// import React, { Component } from "react";
// import { RoomContext } from "../Context";

// export default class Modal extends Component {
//   static contextType = RoomContext;
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     let showHideModal = this.props.show
//       ? "modal display-block"
//       : "modal display-none";
//     return (
//       <>
//         <div className={showHideModal}>
//           <section className="modal-main">
//             <h5>CUki</h5>
//             <button onClick={this.props.handleClose}>close</button>
//           </section>
//         </div>
//       </>
//     );
//   }
// }
