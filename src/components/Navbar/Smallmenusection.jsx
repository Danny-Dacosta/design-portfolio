import React from "react";
import "./smallmenusection.css";
import { Link } from "react-router-dom";

function Smallmenusection({ Open, toggleMenu }) {
  const handleLinkClick = () => {
    toggleMenu(); // Call toggleMenu function to close the menu
  };

  return (
    <div className={`small-menu-section ${Open ? "open" : ""}`}>
      <div className="ssmenuupper">
        <div className="ssmenulinks">
          <Link
            to="/"
            style={{ color: "inherit", textDecoration: "inherit" }}
            onClick={handleLinkClick} // Call handleLinkClick when link is clicked
          >
            Home
          </Link>
        </div>
        <div className="ssmenulinks">
          <Link
            to="/about"
            style={{ color: "inherit", textDecoration: "inherit" }}
            onClick={handleLinkClick} // Call handleLinkClick when link is clicked
          >
            About Me
          </Link>
        </div>
        <div className="ssmenulinks">
          <Link
            to="/projects"
            style={{ color: "inherit", textDecoration: "inherit" }}
            onClick={handleLinkClick} // Call handleLinkClick when link is clicked
          >
            My Projects
          </Link>
        </div>
      </div>
      <div className="ssmenulower">
        <a
          className="ssmenubuttons"
          href="https://www.linkedin.com/in/tanyaguptaa/"
          target="_blank"
        >
          Connect on Linkedin{" "}
          <img
            src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
            alt=""
            style={{ height: "10px" }}
          />
        </a>
        <a
          className="ssmenubuttons"
          href="https://www.behance.net/tanyagupta24"
          target="_blank"
        >
          Checkout my Behance{" "}
          <img
            src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
            alt=""
            style={{ height: "10px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Smallmenusection;
