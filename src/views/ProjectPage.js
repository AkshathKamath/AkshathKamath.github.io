import React from "react";

const ProjectItem = ({ title, link, technologies, highlights }) => {
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
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#000",
                textDecoration: "none",
              }}
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>

        <span
          style={{
            fontSize: "16px",
            color: "#666",
            fontWeight: "500",
          }}
        >
          {technologies}
        </span>
      </div>

      <ul
        style={{
          marginTop: "15px",
          paddingLeft: "20px",
          lineHeight: "1.8",
        }}
      >
        {highlights.map((item, index) => (
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

const ProjectsPage = () => {
  const projects = [
    {
      title: "Social Network with Kafka event-triggered feed service",
      link: "https://github.com/AkshathKamath/Social-Network",
      technologies: "Python, FastAPI, Kafka, MongoDB, JWT/OAuth2",
      highlights: [
        "Built Python FastAPI backend for social networking platform, designing RESTful APIs supporting user authentication (JWT/OAuth2), social features (following system, posts, comments) with < 100ms API response time.",
        "Engineered scalable feed service with event-based architecture, using Kafka for async fan-out to precomputed MongoDB timelines, optimizing read performance while ensuring scalable writes.",
      ],
    },
    {
      title: "Cloud-Native Room Recommendation System",
      link: "https://github.com/AkshathKamath/homiehub/tree/recommendation-service",
      technologies: "Python, Firestore, GKE, GitHub Actions, ArgoCD",
      highlights: [
        "Built vector-based recommendation system storing user, room embeddings and metadata in Firestore, with nearest-neighbor search leveraging vector indexes, achieving 90% user-match accuracy for personalized room recommendations.",
        "Deployed 2 microservices (recommendation, LLM agent) on Google Kubernetes Engine (GKE) with CI/CD pipelines using GitHub Actions for automated testing and ArgoCD for deployment updates, achieving 99% uptime and minimal latency.",
      ],
    },
    {
      title: "Distributed Key Value Store",
      link: null,
      technologies: "Python, Raft Consensus Protocol",
      highlights: [
        "Implemented a fault-tolerant distributed key-value store supporting core CRUD operations, implementing a single-leader, multi-follower architecture to ensure high availability and consistent data replication across nodes.",
        "Implemented the Raft consensus protocol to enable robust leader election and log replication, ensuring strong consistency and seamless failover in response to leader or node failures.",
      ],
    },
    {
      title: "GPT from scratch in PyTorch",
      link: "https://github.com/AkshathKamath/GPT-From-Scratch",
      technologies: "Python, PyTorch, Transformers",
      highlights: [
        "Implemented transformer decoder from scratch in PyTorch, implementing Multi-Head Self-Attention and Feed Forward modules for causal language modeling with 512-token context window for next token prediction.",
        "Reduced perplexity by 20% via MoE architecture with sparse gating and Rotary Positional Embeddings (RoPE) implementation for improved sequence understanding, accelerated inference by 50% through KV-caching optimization.",
      ],
    },
    {
      title: "arXiv Research Papers QA and Summarizing Platform",
      link: "https://github.com/AkshathKamath/arXplorer",
      technologies: "Python, T5, QLoRA, AWS EC2",
      highlights: [
        "Fine-tuned Google's T5-small transformer using the parameter-efficient QLoRA technique, with input preprocessed to fit the model's context window, enabling concise summarization of arXiv research papers.",
        "Applied 8-bit quantization to reduce model size by 50% while maintaining 95% of original performance, then deployed the optimized model as a RESTful API on AWS EC2 GPU instances for inference.",
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
        Projects
      </h1>

      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          link={project.link}
          technologies={project.technologies}
          highlights={project.highlights}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
