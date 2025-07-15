import React from "react";

const Background: React.FC = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(119,133,204,1)",
      zIndex: 0,
      pointerEvents: "none",
    }}
  />
);

export default Background;