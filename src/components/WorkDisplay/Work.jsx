import React from "react";
import zzzone from "../../assets/zzzone.png";
import "./work.css";
import { Link } from "react-router-dom";

function Work({
  workpic = zzzone,
  worktype = "UI + UX",
  title = "Zzzone - Sleep Inducing App",
  description = "Introducing my Zzzone case study – the dreamy sleep-inducing app that's all about catching those Z's like a pro! 😴✨",
  workColor = "#7B7EFF",
  link = "zzzone",
}) {
  return (
    <>
      <div className="each-work">
        <Link to={link} style={{ textDecoration: "inherit", color: "inherit" }}>
          <img src={workpic} className="work-case-pic" alt="" />
          <div className="desc-work-area">
            <h3 className="work-type">{worktype}</h3>
            <h2 className="work-title" style={{ color: workColor }}>
              {title}
            </h2>
            <h2 className="work-desc">{description}</h2>
            <button
              className="work-link"
              style={{ backgroundColor: workColor, color: "white" }}
            >
              {" "}
              View Case{" "}
              <img
                src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
                className="arrow"
              />
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Work;
