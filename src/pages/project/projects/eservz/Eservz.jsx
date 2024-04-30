import React from "react";
import Project from "../Project";
import eservz from "../../../../assets/eservz.png";
import eservz1 from "./eservzpic1.png";
import eservz2 from "./eservzpic2.png";
import "./eservz.css";

import { Footer, Work } from "../../../../components";
import finixpe from "../../../../assets/finixpe.png";
import zzzone from "../../../../assets/zzzone.png";

function Eservz() {
  return (
    <>
      <Project
        projectImg={eservz}
        projectColor="#FFA22F"
        projectTitle="Eservz"
        projectDesc="Eservz is a leading and globally renowned e-commerce and Amazon specialist agency that provides revolutionary back-office support to e-commerce sellers, business owners and vendors on multiple online channels."
        projectType="E-Com Website Redesign"
        hasActiveLink={true}
        activeLink="https://www.eservz.com/"
        behanceLink="https://www.behance.net/gallery/195930659/Eservz"
        hasBehanceLink={true}
      ></Project>
      <div className="whole-proj-page eservz-desc">
        <div className="proj-more-title" style={{ color: "#FFA22F" }}>
          Challenge Faced
        </div>
        <div className="project-more-desc">
          Challenge Faced The client's primary objective was to create a website
          that effectively communicated the range of services they offered and
          was easy for users to navigate. Additionally. they wanted to redesign
          the website to appeal to their younger target audience.
        </div>
        <img src={eservz1} className="project-more-img" />
        <div className="proj-more-title" style={{ color: "#FFA22F" }}>
          Solution Delivered
        </div>
        <div className="project-more-desc">
          We conducted user interviews to understand the target audience's
          preferences and expectations. This information helped us to create a
          design that was both visually appealing and user-friendly. The website
          also prominently features Eservz’s USP and process. attracting new
          customers.
        </div>
        <img src={eservz2} className="project-more-img" />
        <div className="project-more-desc">
          The goal was to create a user-friendly interface that would make it
          easy for visitors to find relevant information. The services were
          further categorised using clear and concise language.
          <br />
          <br />
          We presented the reasons brands should work with Eservz by
          communicating their value proposition in a visually easy to understand
          manner, reducing cognitive load of users.
        </div>
      </div>
      <h2
        className="home-work-title about-skill"
        style={{ backgroundColor: "#f4f4f4" }}
      >
        More like this..
      </h2>
      <div className="project-works" style={{ backgroundColor: "#f4f4f4" }}>
        <Work link="/projects/zzzone" workpic={zzzone}></Work>
        <Work
          workpic={finixpe}
          title="Finixpe"
          worktype="Website Design"
          description="Finixpe is providing payment Solutions for companies of all sizes"
          workColor="#F15A29"
          link="/projects/finixpe"
        ></Work>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Eservz;
