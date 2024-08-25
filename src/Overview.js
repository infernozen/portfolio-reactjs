import React, { useState } from "react";
import "./styles/Overview.css";
import ShowcaseItem from "./components/showcase_item";
import { certifications, badges, projects, allItems } from "./data";

function Overview() {
  const [selectedOption, setSelectedOption] = useState("ALL");

  const renderOverviewShowcase = () => {
    switch (selectedOption) {
      case "ALL":
        return (
          <div className="grid-showcase">
            {allItems.map((project, index) => (
              <ShowcaseItem
                key={index}
                type={project.type}
                text={project.text}
                link={project.link}
                imagepath={project.imagepath}
                style={project.style}
              />
            ))}
          </div>
        );
      case "PROJECTS":
        return (
          <div className="grid-showcase">
            {projects.map((project, index) => (
              <ShowcaseItem
                key={index}
                type={project.type}
                text={project.text}
                link={project.link}
                imagepath={project.imagepath}
                style={project.style}
              />
            ))}
          </div>
        );
      case "CERTIFICATIONS":
        return (
          <div className="grid-showcase">
            {certifications.map((certification, index) => (
              <ShowcaseItem
                key={index}
                type={certification.type}
                text={certification.text}
                link={certification.link}
                imagepath={certification.imagepath}
                style={certification.style}
              />
            ))}
          </div>
        );
      case "BADGES":
        return (
          <div className="grid-showcase">
            {badges.map((badge, index) => (
              <ShowcaseItem
                key={index}
                type={badge.type}
                text={badge.text}
                link={badge.link}
                imagepath={badge.imagepath}
                style={badge.style}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="Overview-Background">
        <div className="overview-container">
          <div className="overview-title">
            <p>PROFILE</p><br></br><p>OVERVIEW</p>
          </div>
          <div className="overview-sub">
            <div className="overview-options">
              <div
                className={selectedOption === "ALL" ? "selected-overview" : ""}
                onClick={() => setSelectedOption("ALL")}
              >
                <p id='option-dot'>•</p> ALL
              </div>
              <div
                className={
                  selectedOption === "PROJECTS" ? "selected-overview" : ""
                }
                onClick={() => setSelectedOption("PROJECTS")}
              >
                <p id='option-dot'>•</p> PROJECTS
              </div>
              <div
                className={
                  selectedOption === "CERTIFICATIONS" ? "selected-overview" : ""
                }
                onClick={() => setSelectedOption("CERTIFICATIONS")}
              >
                <p id='option-dot'>•</p> CERTIFICATIONS
              </div>
              <div
                className={
                  selectedOption === "BADGES" ? "selected-overview" : ""
                }
                onClick={() => setSelectedOption("BADGES")}
              >
                <p id='option-dot'>•</p> BADGES
              </div>
            </div>
            <div className="overview-showcase">{renderOverviewShowcase()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
