import React from "react";
import Project from "../Project";
// import { Footer } from "../../../../components";
import "./zzzone.css";
import zzzonepic1 from "./zzzonepic1.png";
import zzzonepic2 from "./zzzonepic2.png";

import { Footer, Work } from "../../../../components";
import finixpe from "../../../../assets/finixpe.png";
import eservz from "../../../../assets/eservz.png";

function Zzzone() {
  return (
    <>
      <Project></Project>
      <div className="whole-proj-page eservz-desc">
        <div className="proj-more-title" style={{ color: "#7B7EFF" }}>
          Problem Statement
        </div>
        <div className="project-more-desc">
          Many people struggle with poor sleep quality and insomnia, leading to
          fatigue and decreased productivity. Existing sleep apps lack
          personalized features and fail to address the root causes of sleep
          problems. There is a need for a comprehensive sleep app that offers
          tailored solutions to improve sleep hygiene, track progress, and
          provide evidence-based recommendations for better sleep.
        </div>
        <img src={zzzonepic1} className="project-more-img" />
        <div className="proj-more-title" style={{ color: "#7B7EFF" }}>
          User Research
        </div>
        <div className="project-more-desc">
          The survey 'How India Sleeps', which compares inputs received from
          people across the country in the last three years, highlights the
          sleeping pattern of Indians. <br /> Close to 39,000 Indians from 309
          districts participated in the survey. Here are some statistics from
          the survey conducted: <br /> - 61% of Indians go through restless
          nights. <br /> - 55% of Indians are getting less than 6 hours of
          uninterrupted sleep each night.
          <br /> - 43% of Indians have difficulty waking up on time.
          <br /> - 20% of Indians have a medical condition that affects their
          sleep.
        </div>
        <img src={zzzonepic2} className="project-more-img" />
      </div>
      <h2
        className="home-work-title about-skill"
        style={{ backgroundColor: "#f4f4f4" }}
      >
        More like this..
      </h2>
      <div className="project-works" style={{ backgroundColor: "#f4f4f4" }}>
        <Work
          workpic={eservz}
          worktype="E-Com Website Redesign"
          description="Eservz is a leading and globally renowned e-commerce and Amazon specialist agency."
          workColor="#FFA22F"
          link="/projects/eservz"
          title="Eservz"
        ></Work>
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

export default Zzzone;
