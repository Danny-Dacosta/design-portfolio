import React from "react";
import { Footer, Scroll } from "../../components";
import tanya from "../../assets/tanyaphoto.png";
import tanya2 from "../../assets/tanyaphoto2.png";
import { useState, useEffect } from "react";
import "./about.css";
import { Work } from "../../components";
import eservz from "../../assets/eservz.png";
import zzzone from "../../assets/zzzone.png";

function About() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Scroll></Scroll>
      <div className="about-section">
        <div>
          <img src={tanya2} className="about-photo" />
        </div>
        <div className="about-intro">
          <div className="description">
            Hi, I'm <span style={{ fontWeight: "600" }}> Tanya</span>, a
            self-taught designer by practice and an artist by heart. <br /> A{" "}
            <span style={{ fontWeight: "600", color: "rgb(0, 210, 128)" }}>
              Product Designer
            </span>{" "}
            who loves to build products that pleases my customers. I tell story
            through my design and illustrations. I am curious, meticulous, and
            collaborative. I love to travel and learn new things about the world
            and people.
          </div>

          <a
            href="https://drive.google.com/file/d/10dU2GYlBz4OqzDozAZk1yX-AyCko8t71/view?usp=sharing"
            target="_blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button className="about-resume">
              My Resume{" "}
              <img
                src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
                style={{ height: "14px" }}
              />
            </button>
          </a>
        </div>
      </div>
      <div className="about-skills-exp">
        <h2 className="home-work-title about-skill">My Skills</h2>
        <div className="skills-section">
          <div className="skills-software">
            <div
              className="right-skills"
              style={{
                display: "flex",
                alignItems: screenWidth < 400 ? "center" : "flex-end",
                flexDirection: "column",
              }}
            >
              <h2 className="skills-title">Design</h2>

              <h3 className="each-skill">Design Research</h3>
              <h3 className="each-skill">User Interface</h3>
              <h3 className="each-skill">User Experience</h3>
              <h3 className="each-skill">Prototyping</h3>
              <h3 className="each-skill">Wireframing</h3>
              <h3 className="each-skill">Packaging Design</h3>
              <h3 className="each-skill">Product Label Design</h3>
            </div>
          </div>
          <div className="skills-software">
            <div
              className="left-skills"
              style={{
                display: "flex",
                alignItems: screenWidth < 400 ? "center" : "flex-start",
                flexDirection: "column",
              }}
            >
              <h2 className="skills-title">Software</h2>
              <h3 className="each-skill">Adobe Illustrator</h3>
              <h3 className="each-skill">Adobe Photoshop</h3>
              <h3 className="each-skill">CorelDRAW</h3>
              <h3 className="each-skill">Figma</h3>
              <h3 className="each-skill">Adobe XD</h3>
            </div>
          </div>
        </div>
        <h2 className="home-work-title about-skill">My Experience</h2>
        <div className="exp-section-new">
          <div className="exp-card">
            <div className="exp-title">Product Designer</div>
            <div className="exp-company" style={{ color: "#ef68fe" }}>
              I2pify.ai
            </div>
            <div className="exp-place" style={{ color: "#ef68fe" }}>
              Gurgaon, Haryana
            </div>
            <div className="exp-period">Jan 2024 - Present</div>
            <div className="exp-desc">
              <div className="each-exp">
                - Collaborated with cross-functional teams to design
                user-centric digital products
              </div>
              <div className="each-exp">
                - Conducted user research and gathered feedback to align designs
                with client objectives
              </div>
              <div className="each-exp">
                - Created wireframes, prototypes, and high-fidelity designs for
                effective visualisation
              </div>
              <div className="each-exp">
                - Contributed to developing design systems for product
                consistency
              </div>
            </div>
          </div>
          <div className="exp-card">
            <div className="exp-title">Product Designer</div>
            <div className="exp-company" style={{ color: "#61CE70" }}>
              EcoCare Technologies Pvt Ltd
            </div>
            <div className="exp-place" style={{ color: "#61CE70" }}>
              Noida, Uttar Pradesh
            </div>
            <div className="exp-period">Dec 2022 - Jul 2023</div>
            <div className="exp-desc">
              <div className="each-exp"> - Designed B2B and B20 websites.</div>
              <div className="each-exp">
                - Revamped product labels and packaging
              </div>
              <div className="each-exp">
                - Resulted In a significant Increase of 20% In sales
              </div>
              <div className="each-exp">
                - Demonstrated the Impact of design on consumer engagement and
                market success.
              </div>
            </div>
          </div>
          <div className="exp-card">
            <div className="exp-title">Product Designer</div>
            <div className="exp-company" style={{ color: "#1d31a7" }}>
              Dualite
            </div>
            <div className="exp-place" style={{ color: "#1d31a7" }}>
              Jodhpur, Rajasthan
            </div>
            <div className="exp-period">Oct 2022 - Dec 2022</div>
            <div className="exp-desc">
              <div className="each-exp">
                - Led Interactive graphics creation for website
              </div>
              <div className="each-exp">
                - Developed Visual Design strategy for Zostel
              </div>
              <div className="each-exp">
                - Played a pivotal role In the launch of Dualite plugin
              </div>
              <div className="each-exp">
                - Enhanced engagement and seamless integration of design and
                functionality
              </div>
            </div>
          </div>
          <div className="exp-card">
            <div className="exp-title">Graphic Designer</div>
            <div className="exp-company" style={{ color: "#015b26" }}>
              Newton School
            </div>
            <div className="exp-place" style={{ color: "#015b26" }}>
              Bengaluru, Karnataka
            </div>
            <div className="exp-period">Aug 2022 - Sep 2022</div>
            <div className="exp-desc">
              <div className="each-exp">- Orchestrated email campaigns</div>
              <div className="each-exp">- Boosted response rates by 50%</div>
              <div className="each-exp">
                - Achieved maximum registrations through creative planning
              </div>
              <div className="each-exp">
                - Designed posters, emails, and merchandise
              </div>
              <div className="each-exp">
                - Contributed to the launch of the Newton Discord channel
              </div>
            </div>
          </div>
          <div className="exp-card">
            <div className="exp-title">UX/UI Designer</div>
            <div className="exp-company" style={{ color: "#00a2ca" }}>
              Ark Learnings
            </div>
            <div className="exp-place" style={{ color: "#00a2ca" }}>
              Mumbai, Maharashtra
            </div>
            <div className="exp-period">Jan 2022 - Jun 2022</div>
            <div className="exp-desc">
              <div className="each-exp">
                - Played a key role in designing and maintaining the company's
                website
              </div>
              <div className="each-exp">
                - Collaborated with the team to craft visually appealing and
                user-friendly web pages
              </div>
            </div>
          </div>
          <h2 className="home-work-title about-skill">Recent Works</h2>
          <div className="project-works">
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
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
