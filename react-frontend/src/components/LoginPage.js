import React from "react";
import { Link } from "react-router-dom";
import MyNavbar from "./MyNavBar";
import BG from "../images/loginBG.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const LoginPage = () => {
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
          paddingTop: "30px",
          paddingBottom: "30px",
          boxSizing: "content-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            placeholder="E-MAIL"
            style={{
              fontFamily: "'Lalezar', cursive",
              fontSize: "30px",
              height: "70px",
              width: "300px",
              marginBottom: "90px",
              border: "none",
            }}
          />

          <div className="d-flex justify-content-between mt-4">
            <Link to="/" style={{ textDecoration: "none" }}>
              <button
                className="btn btn-primary btn-rounded"
                style={{
                  width: "160px",
                  fontSize: "28px",
                  borderRadius: "50px",
                  backgroundColor: "#00A36C",
                  fontFamily: "'Lalezar', cursive",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                }}
              >
                Log in
              </button>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button
                className="btn btn-primary btn-rounded"
                style={{
                  width: "160px",
                  marginLeft: "20px",
                  fontSize: "28px",
                  borderRadius: "50px",
                  backgroundColor: "#FFAC1C",
                  fontFamily: "'Lalezar', cursive",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                }}
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
