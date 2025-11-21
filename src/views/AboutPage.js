import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";

const AboutPage = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 40px",
        display: "flex",
        gap: "60px",
        alignItems: "flex-start",
      }}
    >
      {/* Left Content */}
      <div style={{ flex: "1" }}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "400",
            marginBottom: "10px",
            color: "#000",
          }}
        >
          Akshath Kamath
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#666",
            marginBottom: "40px",
          }}
        >
          Software Engineer
        </p>

        <div
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "30px",
          }}
        >
          <p style={{ marginBottom: "20px" }}>
            Data Science graduate student at Northeastern University's Khoury
            College of Computer Sciences (GPA: 3.8, graduating May 2026) with a
            strong foundation in building scalable backend infrastructure and
            production AI systems.
          </p>

          <p style={{ marginBottom: "20px" }}>
            I've completed three software engineering internships where I've
            shipped features that serve thousands of users daily. At Joist AI, I
            engineered semantic search tools and multi-agent RAG systems using
            LangGraph that reduced proposal creation time by 50%. At Surplus, I
            built ETL pipelines processing 500K+ monthly transactions and
            performed ML-based user segmentation that reduced customer
            acquisition costs by 20%. At PwC, I developed secure payment
            validation systems handling 10,000+ daily transactions with 99.9%
            uptime using microservices, AWS, and CI/CD pipelines.
          </p>

          <p>
            Technical Skills: Strong proficiency in Python, Java, Golang, and
            modern web technologies. Experienced with ML frameworks (PyTorch,
            TensorFlow, LangChain), backend development (Flask, FastAPI,
            Django), cloud infrastructure (AWS, Docker, Kubernetes), databases
            (PostgreSQL, MongoDB, Redis), and distributed systems (Kafka,
            microservices). AWS Certified Cloud Practitioner.
          </p>
          <p>
            Currently seeking full-time Software Engineering or Machine Learning
            Engineering roles starting June 2026. Open to opportunities in
            backend infrastructure, AI/ML systems, distributed systems, or
            full-stack development where I can contribute to building scalable,
            impactful products.
          </p>
        </div>
      </div>

      {/* Right Sidebar */}
      <ProfileSidebar />
    </div>
  );
};

export default AboutPage;
