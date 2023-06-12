import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, Toast } from "react-bootstrap";
import MyNavbar from "./MyNavBar";
import BG from "../images/loginBG.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lineID, setLineID] = useState("");
  const [fbLink, setFbLink] = useState("");
  const [error, setError] = useState("");
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const validateInputs = () => {
    if (name.trim() === "") {
      setError("Name cannot be empty!!!");
      return false;
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Invalid email format!!!");
      return false;
    }

    if (!/^09\d{8}$/.test(phoneNumber)) {
      setError("Invalid phone number format!!!");
      return false;
    }

    setError("");
    return true;
  };

  const handleJoinUs = () => {
    if (validateInputs()) {
      const requestBody = {
        uid: 0,
        name: name,
        createDate: "",
        contact: {
          cid: 0,
          phone_number: phoneNumber,
          email: email,
          line_id: lineID,
          fb_url: fbLink,
        },
      };

      axios
        .post("http://localhost:8080/api/users/register", requestBody)
        .then((response) => {
          // Handle successful response here
          console.log(response.data);
          setSuccessMessage(response.data); // Set success message from response
          // Clear error message
          setError("");
          // Redirect to /login page after a delay of 3 seconds
          setTimeout(() => {
            window.location.href = "/login";
          }, 1000);
        })
        .catch((error) => {
          // Handle error here
          console.error(error);
          setError(error.response.data); // Set error message from response
        });
    }
  };

  const buttonStyle = {
    width: "150px",
    fontSize: "28px",
    borderRadius: "50px",
    backgroundColor: isButtonHovered ? "#008753" : "#00A36C",
    fontFamily: "'Lalezar', cursive",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-8px",
    textDecoration: "none",
    color: "#FFF",
    textAlign: "center",
    display: "inline-block",
    border: "none",
    transform: animate ? "translateY(0)" : "translateY(100px)",
    opacity: animate ? 1 : 0,
    transition: "transform 1s, opacity 1s",
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
              marginTop: "0px",
              border: "none",
            }}
          />
          <input
            type="text"
            className="form-control rounded-pill mt-4"
            placeholder="NAME"
            style={{
              fontFamily: "'Lalezar', cursive",
              fontSize: "25px",
              height: "45px",
              width: "300px",
              border: "none",
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="form-control rounded-pill mt-3"
            placeholder="E-MAIL"
            style={{
              fontFamily: "'Lalezar', cursive",
              fontSize: "25px",
              height: "45px",
              width: "300px",
              border: "none",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="phoneNumber"
            className="form-control rounded-pill mt-3"
            placeholder="PHONE NUMBER"
            style={{
              fontFamily: "'Lalezar', cursive",
              fontSize: "25px",
              height: "45px",
              width: "300px",
              border: "none",
            }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="LineID"
            className="form-control rounded-pill mt-3"
            placeholder="LINE ID (OPTIONAL)"
            style={{
              fontFamily: "'Lalezar', cursive",
              fontSize: "25px",
              height: "45px",
              width: "300px",
              border: "none",
            }}
            value={lineID}
            onChange={(e) => setLineID(e.target.value)}
          />
          <input
            type="FBLink"
            className="form-control rounded-pill mt-3"
            placeholder="FB LINK (OPTIONAL)"
            style={{
              fontFamily: "'Lalezar', cursive",
              fontSize: "25px",
              height: "45px",
              width: "300px",
              border: "none",
            }}
            value={fbLink}
            onChange={(e) => setFbLink(e.target.value)}
          />
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-primary btn-rounded"
              style={buttonStyle}
              onClick={handleJoinUs}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-end">
        <Toast
          bg="danger"
          show={!!error}
          onClose={() => setError("")}
          delay={5000}
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
          <Toast.Header>
            <span className="me-auto" style={{ color: "black" }}>
              Fail to register!
            </span>
          </Toast.Header>
          <Toast.Body>{error}</Toast.Body>
        </Toast>
        <Toast
          bg="success"
          show={!!successMessage}
          onClose={() => setSuccessMessage("")}
          delay={5000}
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
          <Toast.Header>
            <span className="me-auto" style={{ color: "black" }}>
              Registration successful!
            </span>
          </Toast.Header>
          <Toast.Body>{successMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default RegisterPage;
