import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ open }) => {
  return (
    <div className="sidebar-page">
      <div className={`sidebar ${open && `open`}`}></div>
    </div>
  );
};

export default Sidebar;
