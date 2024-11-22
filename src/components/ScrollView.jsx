import React from "react";

const ScrollView = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh", // Full viewport height
        overflowY: "scroll", // Enable vertical scrolling
        overflowX: "hidden", // Disable horizontal scrolling
        scrollBehavior: "smooth", // Smooth scrolling for better UX
        padding: "10px", // Optional padding
        boxSizing: "border-box", // Maintain consistent layout
        backgroundColor: "inherit", // Match parent's background
      }}
    >
      {children}
    </div>
  );
};

export default ScrollView;
