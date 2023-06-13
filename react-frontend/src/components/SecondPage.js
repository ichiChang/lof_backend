import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link component if not already imported
import MyNavbar from "./MyNavBar";
import BG from "../images/SecondPageBG.jpg";
import Lost from "../images/lost.png";
import Found from "../images/found.png";

const SecondPage = () => {
  useEffect(() => {
    localStorage.setItem("userId", "0");
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
          backgroundImage: `url(${BG})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          minHeight: "calc(100vh - 232px)",
          paddingTop: "120px",
          boxSizing: "content-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/lost">
          <img
            src={Lost}
            alt="Lost"
            style={{
              marginRight: "75px",
              width: "400px",
              height: "180px",
              marginTop: "-150px",
            }}
          />
        </Link>
        <Link to="/found">
          <img
            src={Found}
            alt="Found"
            style={{
              marginLeft: "75px",
              width: "465px",
              height: "180px",
              marginTop: "-150px",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default SecondPage;
