import React from "react";

const Washroom = ({ text, bg }) => {
  return (
    <div className="mens" style={{ backgroundColor: bg }}>
      {text}
    </div>
  );
};

export default Washroom;
