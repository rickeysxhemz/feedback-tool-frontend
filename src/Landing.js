import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Landing() {

  return (
    <div className="center-screen">
      <div className="welcome-box">
        <h1 className="welcome-text">Welcome to Feedback App</h1>
        
        {/* Use Link from react-router-dom to navigate to the login route */}
        <Link to="/login" className="styled-button">
          Login / Register
        </Link>
      </div>
    </div>
  );
}

export default Landing;
