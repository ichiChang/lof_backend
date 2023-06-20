import React, { useEffect, useState } from "react";
import MyNavbar from "./MyNavBar";
import UserService from "../services/UserService";

const PersonalPage = () => {
  const [animate, setAnimate] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setAnimate(true);
    const userId = localStorage.getItem("userId");
    if (userId) {
      UserService.getUserById(userId)
        .then((response) => {
          const user = response.data;
          setUserName(user.name);
        })
        .catch((error) => {
          console.log("Error fetching user data: ", error);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem("userId", "0");
    window.location.href = "/";
  };

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
          <p
            style={{
              fontFamily: "Lalezar, cursive",
              fontSize: "120px",
              color: "#000000",
              padding: "10px",
              margin: "-100px 20px", // 上移了一些
            }}
          >
            {userName}
          </p>
        </div>
        <button
          style={{
            position: "fixed",
            top: "250px",
            right: "300px",
            backgroundColor: "#FF6161",
            fontFamily: "'Lalezar', cursive",
            borderRadius: "50px",
            width: "200px",
            height: "100px",
            border: "none",
            color: "#FFFFFF",
            fontSize: "40px",
            fontWeight: "bold",
            cursor: "pointer",
            zIndex: 9999,
          }}
          onClick={handleLogout}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#FF3131";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#FF6161";
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default PersonalPage;
