import React from "react";
import "./Navbar.scss";
import { navItems } from "../navitems/navitems.data";
import Navitem from "../navitems/Navitem";

const Navbar = () => {
  return (
    <nav className="navbar">
      {navItems.map((item, index) => (
        <Navitem key={index} title={item.title} icon={item.icon} />
      ))}
    </nav>
  );
};

export default Navbar;
