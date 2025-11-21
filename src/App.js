import React from "react";
import Navigation from "./components/Navigation";
import AboutPage from "./views/AboutPage";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navigation />
      <AboutPage />
    </div>
  );
};

export default App;
