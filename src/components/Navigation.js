import React from "react";

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav
      style={{
        borderBottom: "1px solid #e5e5e5",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "flex-end",
        gap: "30px",
      }}
    >
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage("about");
        }}
        style={{
          color: currentPage === "about" ? "#000000ff" : "#666",
          textDecoration: "none",
          fontWeight: currentPage === "about" ? "500" : "400",
          cursor: "pointer",
        }}
      >
        About
      </a>

      <a
        href="#experience"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage("experience");
        }}
        style={{
          color: currentPage === "experience" ? "#000000ff" : "#666",
          textDecoration: "none",
          fontWeight: currentPage === "experience" ? "500" : "400",
          cursor: "pointer",
        }}
      >
        Experience
      </a>

      <a
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage("projects");
        }}
        style={{
          color: currentPage === "projects" ? "#000000ff" : "#666",
          textDecoration: "none",
          fontWeight: currentPage === "projects" ? "500" : "400",
          cursor: "pointer",
        }}
      >
        Projects
      </a>

      <a
        href="#resume"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage("resume");
        }}
        style={{
          color: currentPage === "resume" ? "#000000ff" : "#666",
          textDecoration: "none",
          fontWeight: currentPage === "resume" ? "500" : "400",
          cursor: "pointer",
        }}
      >
        Resume
      </a>
    </nav>
  );
};

export default Navigation;
