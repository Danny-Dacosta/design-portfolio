import React from "react";
import Project from "../Project";
import gourmet from "../../../../assets/gourmet.png";
import { Footer, Work } from "../../../../components";
import myntra from "../../../../assets/myntra.png";
import zzzone from "../../../../assets/zzzone.png";

function Gourmet() {
  return (
    <>
      <Project
        projectImg={gourmet}
        projectColor="#E5A600"
        projectTitle="Gourment PLanet"
        projectDesc="The Gourmet Planet App is a unique non-commercial Food Lovers' App offering preferential treatment, specially curated offerings & attractive discounts to its members at participating hotels/restaurants."
        projectType="App Design"
        hasActiveLink={true}
        activeLink="https://play.google.com/store/search?q=gourmet+planet&c=apps"
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

export default Gourmet;
