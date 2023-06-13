import React, { useEffect, useState } from "react";
import MyNavbar from "./MyNavBar";

const PersonalPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#FFFFF0",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <MyNavbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Adjusted alignment to left
          justifyContent: "flex-start",
          minHeight: "100vh",
          backgroundColor: "#FFFFF0",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#FDDA0D",
            width: "800px",
            height: "400px",
            borderBottomRightRadius: "100px", // Added border radius for bottom right corner
            border: "none", // Removed border style
            borderRight: "2px solid #000", // Added right border style
            borderBottom: "2px solid #000", // Added bottom border style
          }}
        ></div>
      </div>
    </div>
  );
};

export default PersonalPage;
