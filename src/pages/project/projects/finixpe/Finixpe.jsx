import React from "react";
import Project from "../Project";
import finixpe from "../../../../assets/finixpe.png";
import { Footer, Work } from "../../../../components";
import myntra from "../../../../assets/myntra.png";
import zzzone from "../../../../assets/zzzone.png";

function Finixpe() {
  return (
    <>
      <Project
        projectImg={finixpe}
        projectColor="#F15A29"
        projectTitle="Finixpe"
        projectDesc="Introducing FiniXPe, where we're changing the game in payment solutions for
        companies of all sizes. Our cutting edge payment gateway is designed to protect security,
        expedite transactions, and promote the growth of your company in the ever-changing
        digital market."
        projectType="Website Design"
        hasActiveLink={true}
        activeLink="https://www.finixpe.com/"
        hasBehanceLink={false}
      ></Project>
      <h2
        className="home-work-title about-skill"
        style={{ backgroundColor: "#f4f4f4" }}
      >
        More like this..
      </h2>
      <div className="project-works" style={{ backgroundColor: "#f4f4f4" }}>
        <Work
          workpic={myntra}
          title="Myntra Case Study"
          worktype="Case Study"
          description="In-Depth UX Analysis of an Indian fashion E-commerce Website Myntra"
          workColor="#F13AB1"
          link="/projects/myntra"
        ></Work>
        <Work link="/projects/zzzone" workpic={zzzone}></Work>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Finixpe;
