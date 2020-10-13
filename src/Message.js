import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          Name
          <span className="message__timestamp">Bla bla bla</span>
        </h4>
        <p>This is a Message</p>
      </div>
    </div>
  );
}

export default Message;
