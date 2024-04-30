import React from "react";
import zzzone from "../../../assets/zzzone.png";
import { Footer, Scroll } from "../../../components";
import "./project.css";

function Project({
  projectImg = zzzone,
  projectColor = "#7B7EFF",
  projectTitle = "Zzzone - Sleep Inducing App",
  projectDesc = "Many people struggle with poor sleep quality and insomnia, leading to fatigue and decreased productivity. Existing sleep apps lack personalized features and fail to address the root causes of sleep problems. There is a need for a comprehensive sleep app that offers tailored solutions to improve sleep hygiene, track progress, and provide evidence-based recommendations for better sleep.",
  projectType = "UI + UX",
  hasActiveLink = false,
  hasBehanceLink = true,
  activeLink = "https://www.behance.net/gallery/177735849/Zzzone-Sleep-Inducing-App",
  behanceLink = "https://www.behance.net/gallery/177735849/Zzzone-Sleep-Inducing-App",
}) {
  return (
    <>
      <Scroll></Scroll>
      <div className="whole-proj-page">
        <div className="project-type">{projectType}</div>
        <div className="project-title" style={{ color: projectColor }}>
          {projectTitle}
        </div>
        <div className="project-img-section">
          <img src={projectImg} className="project-img" />
        </div>
        <div className="project-desc">{projectDesc}</div>

        <div className="project-links">
          {hasActiveLink ? (
            <>
              <a
                href={activeLink}
                target="_blank"
                className="active-button-link"
                style={{
                  textDecoration: "none",
                  backgroundColor: projectColor,
                  color: "white",
                }}
              >
                Link to Live Project
              </a>
            </>
          ) : null}

          {hasBehanceLink ? (
            <>
              <a
                href={behanceLink}
                target="_blank"
                className="active-button-link"
                style={{
                  textDecoration: "none",
                  backgroundColor: projectColor,
                  color: "white",
                }}
              >
                Link to Behance Project
              </a>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Project;
