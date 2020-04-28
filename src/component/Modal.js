import React from "react";

export default function Modal({
  handleClose,
  show,
  description,
  title,
  id,
  modalImage,
  publisherModal,
  genreModal,
}) {
  const showHideClose = show ? "modal display-block" : "modal display-none";
  // console.log(show);
  return (
    <div className={showHideClose}>
      <section className="modal-main">
        <img src={modalImage} alt="" />
        <div className="modal-content">
          <h5>{title}</h5>
          <h6>{genreModal} games</h6>
          <h6>
            Publiser : <span>{publisherModal}</span>
          </h6>
          <h6>Description : </h6>
          <span>{description}</span>
          <button onClick={handleClose}>Close</button>
        </div>
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
