import React from "react";
import Project from "../Project";
import myntra from "../../../../assets/myntra.png";
// import { Footer } from "../../../../components";
import "./myntra.css";
import myntrapic1 from "./myntrapic1.png";
import { Footer, Work } from "../../../../components";
import eservz from "../../../../assets/eservz.png";
import zzzone from "../../../../assets/zzzone.png";

function Myntra() {
  return (
    <>
      <Project
        projectImg={myntra}
        projectColor="#F13AB1"
        projectTitle="Myntra Case Study"
        projectDesc="Myntra, an Indian fashion marketplace, offers a seamless UI/UX on its mobile app. Discover how they apply UX principles in my latest case study."
        projectType="Case Study"
        hasActiveLink={false}
        behanceLink="https://www.behance.net/gallery/165624519/UX-analysis-of-Myntra"
        hasBehanceLink={true}
      ></Project>
      <div className="whole-proj-page eservz-desc">
        <div className="proj-more-title" style={{ color: "#F13AB1" }}>
          Project Overview
        </div>
        <div className="project-more-desc">
          The Myntra app has a modern and visually appealing design with a clean
          and simple layout. <br />
          <br /> The Myntra app has a seamless user experience that guides users
          through the shopping process with ease.
        </div>
        <img src={myntrapic1} className="project-more-img" />
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
        <Work link="/projects/zzzone" workpic={zzzone}></Work>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Myntra;
