import React from "react";

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
          src="https://via.placeholder.com/280x320"
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
          <p style={{ marginBottom: "20px" }}>
            <strong>Your Title</strong>
            <br />
            Department
          </p>

          <p>
            <strong>Director of Your Lab</strong>
            <br />
            Institute Name
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
