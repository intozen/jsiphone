import React from "react";

const ScrollView = ({ children }) => {
  return (
    <div
    style={{
    minHeight: "100vh", // Allows content to grow beyond the viewport
    overflowY: "auto", // Enable scrolling
    overflowX: "auto", // Disable horizontal scrolling
    scrollBehavior: "smooth", // Smooth scrolling
    // padding: "16px", // Optional padding for spacing
  }}
>
  {children}
</div>

  );
};

export default ScrollView;
