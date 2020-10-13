import React from "react";
import "./SidebarChannel.css";

function SidebarChannel({ id, channel }) {
  return (
    <div className="sidebarChannel">
      <h4 className="sidebarChannel__name">
        <span className="sidebarChannel__hash">#</span>Youtube
      </h4>
    </div>
  );
}

export default SidebarChannel;
