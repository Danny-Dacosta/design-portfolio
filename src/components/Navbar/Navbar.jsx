import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/tanyalogo.png";
import logo2 from "../../assets/tanyalogo2.png";
import { Link } from "react-router-dom";
import Smallmenu from "./Smallmenu";
import Smallmenusection from "./Smallmenusection";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpen(!open);
  };

  return (
    <>
      <div className="shadowclass"></div>
      <div className="main-nav">
        <div className="logo">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <img src={logo2} className="logo-pic" alt="Logo" />
          </Link>
        </div>
        <div className={`nav-links ${open ? "open" : ""}`}>
          <div className="nav-link">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Home
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="/about"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              About Me
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="/projects"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              My Works
            </Link>
          </div>
        </div>
        <div className="nav-contact">
          <a
            href="https://www.linkedin.com/in/tanyaguptaa/"
            target="_blank"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <img
              src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
              alt=""
              style={{ filter: "invert(100%)", marginRight: "10px" }}
            />
            Let's Connect
          </a>
        </div>
        <Smallmenu isOpen={open} toggleMenu={toggleMenu} />
      </div>
      <Smallmenusection Open={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default Navbar;
