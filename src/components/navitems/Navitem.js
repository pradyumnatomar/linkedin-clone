import React, { useState, useEffect } from "react";
import "./Navitem.scss";
import Sidebar from "../sidebar/Sidebar";

const Navitem = ({ title, icon, index, totalNavItems }) => {
  const [sideShow, setSideShow] = useState(false);
  const [lastChild, setLastChild] = useState(false);
  useEffect(() => {
    if (totalNavItems - index === 0) {
      setLastChild(true);
    }
  }, []);
  return (
    <div className="navitem" onClick={() => setSideShow((show) => !show)}>
      {icon}
      <span className="title">{title}</span>
      {lastChild && sideShow && <Sidebar open={sideShow && lastChild} />}
    </div>
  );
};

export default Navitem;
