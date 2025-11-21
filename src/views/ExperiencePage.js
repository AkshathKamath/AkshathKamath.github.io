import React from "react";

const ExperienceItem = ({
  title,
  company,
  location,
  dates,
  responsibilities,
}) => {
  return (
    <div style={{ marginBottom: "25px" }}>
      <div style={{ marginBottom: "10px" }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#000",
            marginBottom: "5px",
          }}
        >
          {title}
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              color: "#666",
              fontWeight: "500",
            }}
          >
            {company}
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "#666",
            }}
          >
            {dates}
          </span>
        </div>
        <span
          style={{
            fontSize: "14px",
            color: "#999",
            fontStyle: "italic",
          }}
        >
          {location}
        </span>
      </div>
      <ul
        style={{
          marginTop: "15px",
          paddingLeft: "20px",
          lineHeight: "1.8",
        }}
      >
        {responsibilities.map((item, index) => (
          <li
            key={index}
            style={{
              fontSize: "16px",
              color: "#333",
              marginBottom: "5px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Joist AI",
      location: "San Diego, CA",
      dates: "May 2025 – Aug 2025",
      responsibilities: [
        "Engineered a Python-based semantic search tool that indexed 1,000+ project proposals into AWS Elasticsearch (OpenSearch) and integrated hybrid retrieval using BM25 and embedding-based models, enabling accurate and efficient query resolution.",
        "Stored user search history in PostgreSQL and cached frequently searched queries in Redis, reducing Elasticsearch lookup time and cutting search latency from 300ms to 50ms.",
        "Built a multi-agent RAG system using LangGraph to answer user queries by retrieving context from AWS OpenSearch, orchestrating specialized agents for query understanding and response generation, reducing proposal creation time by 50%.",
        "Designed an agentic chatbot with specialized agents including a client-specific API agent for retrieving historical customer feedback, improving response accuracy by 35% through context-aware retrieval.",
      ],
    },

    {
      title: "Software Engineer Intern",
      company: "Surplus Pt. Ltd.",
      location: "Mumbai, India",
      dates: "Feb 2024 – May 2024",
      responsibilities: [
        "Built scalable ETL pipelines using PySpark and AWS Glue to process 500K+ monthly user transactions from PostgreSQL, collaborating with data team to engineer 20+ behavioral features and enable downstream analytics workflows.",
        "Performed user segmentation on 5K active users using KMeans clustering to identify 5 distinct spending personas, directly informing marketing strategy that reduced customer acquisition cost by 20%.",
        "Developed comprehensive test suite using pytest achieving 90% code coverage across expense tracking features, collaborating with QA team to validate functionality and reduce production bugs by 40%.",
      ],
    },

    {
      title: "Software Engineer Intern",
      company: "PwC (PricewaterhouseCoopers)",
      location: "Mumbai, India",
      dates: "Jan 2023 – Aug 2023",
      responsibilities: [
        "Engineered and secured the backend for a UPI transaction validation module by implementing JWT-based authentication in AWS Lambda and integrating it with Amazon API Gateway, reducing microservice latency by 15%.",
        "Developed and optimized a Python Flask-based analytics service exposing RESTful API endpoints, and enhanced PostgreSQL query efficiency using SQLAlchemy ORM with connection pooling, reducing response times by 30%.",
        "Orchestrated Docker containerized microservices on AWS ECS with autoscaling, established CI/CD pipelines with Jenkins for automated deployments collaborating with DevOps team to ensure 99.9% uptime.",
      ],
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px 40px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "400",
          marginBottom: "30px",
          color: "#000",
        }}
      >
        Experience
      </h1>

      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          title={exp.title}
          company={exp.company}
          location={exp.location}
          dates={exp.dates}
          responsibilities={exp.responsibilities}
        />
      ))}
    </div>
  );
};

export default ExperiencePage;
