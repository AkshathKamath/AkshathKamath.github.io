import React, { useState } from "react";
import Navigation from "./components/Navigation";
import AboutPage from "./views/AboutPage";
import ExperiencePage from "./views/ExperiencePage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage />;
      case "experience":
        return <ExperiencePage />;
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
