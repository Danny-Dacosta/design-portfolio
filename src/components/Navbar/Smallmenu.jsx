import React from "react";
import "./smallmenu.css";

function Smallmenu({ isOpen, toggleMenu }) {
  return (
    <div className={`container ${isOpen ? "change" : ""}`} onClick={toggleMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

export default Smallmenu;
