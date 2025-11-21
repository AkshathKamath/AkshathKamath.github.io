import React, { useState } from "react";
import Navigation from "./components/Navigation";
import AboutPage from "./views/AboutPage";
import ExperiencePage from "./views/ExperiencePage";
import ProjectsPage from "./views/ProjectPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage />;
      case "experience":
        return <ExperiencePage />;
      case "projects":
        return <ProjectsPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
