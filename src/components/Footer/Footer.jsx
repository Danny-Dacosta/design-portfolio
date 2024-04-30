import React, { useState } from "react";
import "./footer.css";
import behance from "../../assets/behancelogo.png";
import linkedin from "../../assets/linkedinlogo.png";
import email from "../../assets/emailogo.png";

function Footer() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("tanyaalwar@gmail.com");
  };

  return (
    <>
      <div className="footer-main">
        <div className="footer-desc">Let's Connect!</div>

        <div className="footer-icons">
          <a href="https://www.behance.net/tanyagupta24" target="_blank">
            <img className="footer-icon" src={behance} />
          </a>
          <a href="https://www.linkedin.com/in/tanyaguptaa/" target="_blank">
            <img className="footer-icon" src={linkedin} />
          </a>
          <a href="mailto:tanyaalwar@gmail.com">
            <img
              className="footer-icon"
              src={email}
              onClick={copyToClipboard}
            />
          </a>
        </div>
        <div className="footer-copyright">© By Tanya Gupta 2024</div>
      </div>
    </>
  );
}

export default Footer;
