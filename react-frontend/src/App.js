import React from 'react';
import './App.css';
import LostComponent from './components/LostComponent';
import FoundComponent from './components/FoundComponent';
import WelcomePage from './components/WelcomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div style={{ backgroundColor: '#FFFFF0' }}>
      <Router>
        <Routes>
          <Route path="" element={<WelcomePage />} />
          <Route path="/lost" element={<LostComponent />} />
          <Route path="/found" element={<FoundComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
