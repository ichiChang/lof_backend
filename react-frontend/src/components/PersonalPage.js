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
          alignItems: "flex-start",
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
            borderBottomRightRadius: "100px",
            border: "none",
            borderRight: "2px solid #000",
            borderBottom: "2px solid #000",
          }}
        >
          <span
            style={{
              fontFamily: "Lalezar, cursive",
              fontSize: "200px",
              color: "#000000",
              padding: "10px",
              margin: "10px",
            }}
          >
            HEY!
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
