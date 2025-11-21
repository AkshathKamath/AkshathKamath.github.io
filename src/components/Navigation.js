import React from "react";

const Navigation = () => {
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
        style={{
          color: "#000000ff",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        About
      </a>
      <a
        href="#experience"
        style={{
          color: "#666",
          textDecoration: "none",
        }}
      >
        Experience
      </a>
      <a
        href="#project"
        style={{
          color: "#666",
          textDecoration: "none",
        }}
      >
        Projects
      </a>
      <a
        href="#resume"
        style={{
          color: "#666",
          textDecoration: "none",
        }}
      >
        Resume
      </a>
    </nav>
  );
};

export default Navigation;
