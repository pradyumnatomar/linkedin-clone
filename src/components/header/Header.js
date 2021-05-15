import React from "react";
import "./Header.scss";
// components
import Logo from "../../assets/linkedin.png";
import SearchBar from "../searchbar/SearchBar";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="left-nav">
        <div className="logo-holder">
          <img src={Logo} className="logo" />
        </div>
        <SearchBar />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
