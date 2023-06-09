import React from "react";
import { Link } from "react-router-dom";
import MyNavbar from "./MyNavBar";
import BG from "../images/loginBG.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

const RegisterPage = () => {
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
              fontSize: "30px",
              height: "70px",
              width: "300px",
              border: "none",
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
              border: "none",
            }}
          />
          <input
            type="LineID"
            className="form-control rounded-pill mt-3"
            placeholder="LINE ID"
            style={{
              fontFamily: "'Lalezar', cursive",
              fontSize: "30px",
              height: "70px",
              width: "300px",
              color: "#E0C2C2",
              border: "none",
            }}
          />
          <input
            type="FBLink"
            className="form-control rounded-pill mt-3"
            placeholder="FB LINK"
            style={{
              fontFamily: "'Lalezar', cursive",
              fontSize: "30px",
              height: "70px",
              width: "300px",
              border: "none",
            }}
          />
          <div className="d-flex justify-content-between mt-4">
            <Link
              to="/login"
              className="btn btn-primary btn-rounded"
              style={{
                width: "150px",
                fontSize: "28px",
                borderRadius: "50px",
                backgroundColor: "#00A36C",
                fontFamily: "'Lalezar', cursive",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "-8px",
                textDecoration: "none",
                color: "#FFF",
                textAlign: "center",
                display: "inline-block",
                border: "none",
              }}
            >
              Join us!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
