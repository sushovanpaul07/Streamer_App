import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  console.log("props", props);
  return ReactDOM.createPortal(
    <div
      onClick={props.clickCallback}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="ui standard modal visible active"
      >
        <div class="header">{props.title}</div>

        <div className="content">
          {props.metaData}
          {props.content}
        </div>
        <div class="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
