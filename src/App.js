import React from "react";
import "./App.scss";
// header
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
