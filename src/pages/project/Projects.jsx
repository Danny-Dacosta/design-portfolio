import React from "react";
import "./projects.css";
import { Footer, Scroll, Work } from "../../components";
import eservz from "../../assets/eservz.png";
import finixpe from "../../assets/finixpe.png";
import zzzone from "../../assets/zzzone.png";
import myntra from "../../assets/myntra.png";
import gourmet from "../../assets/gourmet.png";
function Projects() {
  return (
    <>
      <Scroll></Scroll>
      <div className="projects-main">
        <h1 className="projects-title">My Design Portfolio</h1>
        <div className="project-works">
          <Work
            workpic={eservz}
            worktype="E-Com Website Redesign"
            description="Eservz is a leading and globally renowned e-commerce and Amazon specialist agency."
            workColor="#FFA22F"
            link="eservz"
            title="Eservz"
          ></Work>
          <Work
            workpic={finixpe}
            title="Finixpe"
            worktype="Website Design"
            description="Finixpe is providing payment Solutions for companies of all sizes"
            workColor="#F15A29"
            link="finixpe"
          ></Work>

          <Work workpic={zzzone}></Work>
          <Work
            workpic={myntra}
            title="Myntra Case Study"
            worktype="Case Study"
            description="In-Depth UX Analysis of an Indian fashion E-commerce Website Myntra"
            workColor="#F13AB1"
            link="myntra"
          ></Work>
          <Work
            workpic={gourmet}
            worktype="App Design"
            description="The Gourmet Planet App is a unique non-commercial Food Lovers App"
            workColor="#E5A600"
            link="gourmet"
            title="Gourmet Planet"
          ></Work>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Projects;
