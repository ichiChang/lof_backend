import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyNavbar from "./MyNavBar";
import BG from "../images/loginBG.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { ToastContainer, Toast } from "react-bootstrap";

const LoginPage = () => {
  const [isLoginButtonHovered, setIsLoginButtonHovered] = useState(false);
  const [isRegisterButtonHovered, setIsRegisterButtonHovered] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const loginButtonStyle = {
    width: "160px",
    fontSize: "28px",
    borderRadius: "50px",
    backgroundColor: isLoginButtonHovered ? "#008753" : "#00A36C",
    fontFamily: "'Lalezar', cursive",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    transition: "background-color 0.3s",
    transform: animate ? "translateX(0)" : "translateX(-100%)",
    opacity: animate ? 1 : 0,
    pointerEvents: animate ? "auto" : "none",
  };

  const registerButtonStyle = {
    width: "160px",
    marginLeft: "20px",
    fontSize: "28px",
    borderRadius: "50px",
    backgroundColor: isRegisterButtonHovered ? "#FF8C00" : "#FFAC1C",
    fontFamily: "'Lalezar', cursive",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    transition: "background-color 0.3s",
    transform: animate ? "translateX(0)" : "translateX(100%)",
    opacity: animate ? 1 : 0,
    pointerEvents: animate ? "auto" : "none",
  };

  const handleLogin = () => {
    const email = document.getElementById("email").value;
    axios
      .get(`http://localhost:8080/api/users/login/${email}`)
      .then((response) => {
        const userId = response.data;
        // Store userId in local storage
        localStorage.setItem("userId", userId);
        // Clear error message
        setError("");
        // Set success message
        setSuccessMessage("Login successful!");
        // Redirect to home page after 1 second
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch((error) => {
        // Handle error here
        console.error(error);
        setError("The email is not yet registered.");
      });
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
          backgroundImage: `url(${BG})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          minHeight: "calc(100vh - 170px)",
          paddingTop: "30px",
          paddingBottom: "30px",
          boxSizing: "content-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: animate ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFCECE",
            borderRadius: "100px",
            width: "500px",
            height: "550px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "20px",
            transform: animate ? "scale(1)" : "scale(0.5)",
            opacity: animate ? 1 : 0,
            transition: "transform 1s, opacity 1s",
          }}
        >
          <FontAwesomeIcon
            icon={faUserCircle}
            style={{
              fontSize: "8rem",
              color: "#F88379",
              marginTop: "20px",
              marginBottom: "80px",
            }}
          />

          <input
            type="email"
            className="form-control rounded-pill mt-3"
            id="email"
            placeholder="E-MAIL"
            style={{
              fontFamily: "'Lalezar', cursive",
              fontSize: "30px",
              height: "70px",
              width: "300px",
              marginBottom: "90px",
              border: "none",
              transform: animate ? "translateY(0)" : "translateY(100px)",
              opacity: animate ? 1 : 0,
              transition: "transform 1s, opacity 1s",
            }}
          />

          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-primary btn-rounded"
              style={loginButtonStyle}
              onMouseEnter={() => setIsLoginButtonHovered(true)}
              onMouseLeave={() => setIsLoginButtonHovered(false)}
              onClick={handleLogin}
            >
              Log in
            </button>

            <Link
              to="/register"
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setIsRegisterButtonHovered(true)}
              onMouseLeave={() => setIsRegisterButtonHovered(false)}
            >
              <button
                className="btn btn-primary btn-rounded"
                style={registerButtonStyle}
              >
                Join us!
              </button>
            </Link>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-end" className="p-3">
        {error && (
          <Toast
            bg="danger"
            onClose={() => setError("")}
            autohide
            style={{
              fontSize: "24px",
              position: "fixed",
              bottom: "20px",
              right: "20px",
              minWidth: "300px",
              fontFamily: "'Lalezar', cursive",
            }}
          >
            <Toast.Header closeButton={false} className="text-white">
              <span className="me-auto" style={{ color: "black" }}>
                Error
              </span>
            </Toast.Header>
            <Toast.Body>{error}</Toast.Body>
          </Toast>
        )}

        {successMessage && (
          <Toast
            bg="success"
            onClose={() => setSuccessMessage("")}
            autohide
            style={{
              fontSize: "24px",
              position: "fixed",
              bottom: "20px",
              right: "20px",
              minWidth: "300px",
              fontFamily: "'Lalezar', cursive",
            }}
          >
            <Toast.Header closeButton={false} className="text-white">
              <span className="me-auto" style={{ color: "black" }}>
                Success
              </span>
            </Toast.Header>
            <Toast.Body>{successMessage}</Toast.Body>
          </Toast>
        )}
      </ToastContainer>
    </div>
  );
};

export default LoginPage;
