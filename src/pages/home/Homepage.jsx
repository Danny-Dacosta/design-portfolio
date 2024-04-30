import React from "react";
import "./homepage.css";
import tanya from "../../assets/tanyaphoto.png";
import { Link } from "react-router-dom";
import { Work, Footer, Scroll } from "../../components";
import eservz from "../../assets/eservz.png";
import finixpe from "../../assets/finixpe.png";
import zzzone from "../../assets/zzzone.png";
import myntra from "../../assets/myntra.png";

function Homepage() {
  return (
    <>
      <Scroll></Scroll>
      <div className="homepagewhole">
        <div className="home-screen">
          <h2 className="home-name">
            <span>Tanya</span>
            <br />
            Gupta
          </h2>

          <img
            src="https://framerusercontent.com/images/zryge5Sij93RIbadZRaaXHodlg.png"
            className="objects obj1"
          />
          <img
            src="https://framerusercontent.com/images/E2TV0iS7BwvUZzl8JAyQYSw7DD4.png"
            className="objects obj2"
          />
          <img
            src="https://framerusercontent.com/images/fzeXJkxBIc747kIIbAww2FTbk.png"
            className="objects obj3"
          />
          <Link
            to="/projects"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <button className="home-work-button">
              Check out my Work
              <img
                src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
                className="arrow"
              />
            </button>
          </Link>
        </div>

        <div className="about-section">
          <div>
            <img src={tanya} className="about-photo" />
          </div>
          <div className="about-intro">
            <div className="description">
              Engineer turned <span>Product Designer</span>, specializing in{" "}
              <span style={{ color: "#FF8884", fontWeight: "500" }}>
                {" "}
                UX Research
              </span>
              . <br /> My designs are driven by user data, infused with{" "}
              <span style={{ color: "#00D280" }}>Expression</span>, fueled by{" "}
              <span style={{ color: "#00D280" }}>Exploration</span> and imbued
              with <span style={{ color: "#00D280" }}>Innovation</span>. I craft
              digital products that strike the perfect balance between function
              and delight.
            </div>
            <Link
              to="/about"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <button className="about-resume">More about me?</button>
            </Link>
          </div>
        </div>

        <h2 className="home-work-title">
          What do i offer <span style={{ color: "rgb(0, 108, 255)" }}>?</span>{" "}
        </h2>
        <div className="design-section">
          <div className="each-design">
            <img
              src="https://framerusercontent.com/images/RMfc5ukZ26kPzKxfW36D6npc.png"
              className="design-img"
            />
            <h3 className="design-title">Research</h3>
            <p className="design-desc">
              Whether it's refining strategies, delving into emerging trends, or
              uncovering untapped opportunities, count on continuous research to
              keep your project ahead of the curve.
            </p>
          </div>
          <div className="each-design">
            <img
              src="	https://framerusercontent.com/images/G7Xf6kX4NvV4F6vxAIY79JkeJ4c.png"
              className="design-img"
            />
            <h3 className="design-title">Storytelling</h3>
            <p className="design-desc">
              Whether it's tweaking the narrative, enhancing engagement, or
              weaving new chapters into your brand's tale, I will make sure your
              audience is captivated!
            </p>
          </div>
          <div className="each-design">
            <img
              src="	https://framerusercontent.com/images/bbr4GniPMvmXCYmeZ7netZsCxM.png"
              className="design-img"
            />
            <h3 className="design-title">Design</h3>
            <p className="design-desc">
              From concept to creation, I immerse myself shaping aesthetics and
              functionality. Let's collaborate and explore designs that
              resonate, leaving a lasting visual impression.
            </p>
          </div>
        </div>
        <h2 className="home-work-title">My Recent Work</h2>
        <div className="home-works">
          <Work
            workpic={eservz}
            worktype="E-Com Website Redesign"
            description="Eservz is a leading and globally renowned e-commerce and Amazon specialist agency."
            workColor="#FFA22F"
            link="projects/eservz"
            title="Eservz"
          ></Work>
          <Work workpic={zzzone} link="projects/zzzone"></Work>
          <Work
            workpic={myntra}
            title="Myntra Case Study"
            worktype="Case Study"
            description="In-Depth UX Analysis of an Indian fashion E-commerce Website Myntra"
            workColor="#F13AB1"
            link="projects/myntra"
          ></Work>
          <Work
            workpic={finixpe}
            title="Finixpe"
            worktype="Website Design"
            description="Finixpe is providing payment Solutions for companies of all sizes"
            workColor="#F15A29"
            link="projects/finixpe"
          ></Work>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Homepage;
