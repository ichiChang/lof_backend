import React from "react";
import "./App.css";
import LostComponent from "./components/LostComponent";
import FoundComponent from "./components/FoundComponent";
import WelcomePage from "./components/WelcomePage";
import SecondPage from "./components/SecondPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import PersonalPage from "./components/PersonalPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div style={{ backgroundColor: "#FFFFF0" }}>
      <Router>
        <Routes>
          <Route path="" element={<WelcomePage />} />
          <Route path="/lost" element={<LostComponent />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/found" element={<FoundComponent />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
