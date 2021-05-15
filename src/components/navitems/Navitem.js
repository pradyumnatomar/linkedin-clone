import React from "react";
import "./Navitem.scss";

const Navitem = ({ title, icon }) => {
  return (
    <div className="navitem">
      {icon}
      <span className="title">{title}</span>
    </div>
  );
};

export default Navitem;
