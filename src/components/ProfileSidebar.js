import React from "react";
import profileImage from "../assets/profile.jpeg";

const ProfileSidebar = () => {
  return (
    <div
      style={{
        width: "280px",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <img
          src={profileImage}
          alt="Profile"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        />

        <div
          style={{
            fontFamily: "monospace",
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          <p>
            <strong>
              <a href="mailto:kamath.ak@northeastern.edu">Email</a>
            </strong>
            <br />
          </p>

          <p>
            <strong>
              <a href="https://www.linkedin.com/in/akshathkamath/">LinkedIn</a>
            </strong>
            <br />
          </p>

          <p>
            <strong>
              <a href="https://github.com/AkshathKamath">GitHub</a>
            </strong>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
