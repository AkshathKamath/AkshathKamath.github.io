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
          color: "#e91e63",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        About
      </a>
      <a
        href="#publications"
        style={{
          color: "#666",
          textDecoration: "none",
        }}
      >
        Publications
      </a>
      <a
        href="#students"
        style={{
          color: "#666",
          textDecoration: "none",
        }}
      >
        Students
      </a>
      <a
        href="#cv"
        style={{
          color: "#666",
          textDecoration: "none",
        }}
      >
        CV
      </a>
    </nav>
  );
};

export default Navigation;
