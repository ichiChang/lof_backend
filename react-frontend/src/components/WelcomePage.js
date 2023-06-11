import React, { useEffect, useState } from "react";
import Righttop from "../images/20.svg";
import RightBottom from "../images/17.svg";
import LeftBottom from "../images/18.svg";
import Back from "../images/back.svg";
import Center from "../images/center.svg";
import Found from "../images/found.svg";
import Lost from "../images/lostim.png";
import Green from "../images/21.svg";
import Start from "../images/start.svg";
import Star from "../images/star.svg";
import Arrow from "../images/8.svg";
import MyNavbar from "./MyNavBar";
import { Link } from "react-router-dom";

const WelcomePage = () => {
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
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 120px)",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${Back})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 0%",
            backgroundSize: "800px 700px",
            position: "absolute",
            top: "15%",
            right: animate ? "50%" : "100%",
            width: "500px",
            height: "500px",
            transform: "scaleX(-1)",
            transition: "right 1s ease-in-out",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${Center})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            backgroundSize: "1500px 750px",
            position: "absolute",
            top: "35%",
            right: animate ? "20%" : "100%",
            width: "1000px",
            height: "300px",
            transition: "right 1s ease-in-out",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${Lost})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            backgroundSize: "500px 500px",
            position: "absolute",
            top: "18%",
            right: animate ? "19%" : "100%",
            width: "800px",
            height: "500px",
            transition: "right 1s ease-in-out",
          }}
        />

        <div
          style={{
            backgroundImage: `url(${Righttop})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "30% 50%",
            backgroundSize: "500px 500px",
            position: "absolute",
            top: "113px",
            right: animate ? "0" : "100%",
            width: "200px",
            height: "200px",
            transition: "right 1s ease-in-out",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${RightBottom})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 20%",
            backgroundSize: "3500px 1500px",
            position: "absolute",
            bottom: "0",
            right: animate ? "0" : "100%",
            width: "800px",
            height: "250px",
            transition: "right 1s ease-in-out",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${Green})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            backgroundSize: "600px 600px",
            position: "absolute",
            bottom: "5%",
            right: "21%",
            width: "300px",
            height: "300px",
            transition: "right 1s ease-in-out",
          }}
        />

        <div
          style={{
            backgroundImage: `url(${LeftBottom})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "300px 300px",
            position: "absolute",
            bottom: "0",
            left: "10px",
            width: "150px",
            height: "120px",
            transition: "right 1s ease-in-out",
          }}
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${Found})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          backgroundSize: "500px 450px",
          position: "absolute",
          top: "45%",
          right: animate ? "30%" : "100%",
          width: "1000px",
          height: "300px",
          transition: "right 1s ease-in-out",
        }}
      />
      <Link to="/second">
        <div
          style={{
            backgroundImage: `url(${Start})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            backgroundSize: "900px 700px",
            position: "absolute",
            top: "45%",
            right: animate ? "20%" : "100%",
            width: "500px",
            height: "400px",
            cursor: "pointer",
            transition: "right 1s ease-in-out",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${Star})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 0%",
            backgroundSize: "500px 300px",
            position: "absolute",
            top: "46.5%",
            right: animate ? "22%" : "100%",
            width: "300px",
            height: "300px",
            transform: animate ? "rotate(10deg)" : "rotate(0deg)",
            transition: "right 1s ease-in-out, transform 1s ease-in-out",
          }}
        />
        <div
          style={{
            backgroundImage: `url(${Arrow})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 0%",
            backgroundSize: "150px 150px",
            position: "absolute",
            top: "60%",
            right: animate ? "41%" : "100%",
            width: "150px",
            height: "150px",
            transform: animate ? "rotate(-20deg)" : "rotate(0deg)",
            transition: "right 1s ease-in-out, transform 1s ease-in-out",
          }}
        />
      </Link>
    </div>
  );
};

export default WelcomePage;
