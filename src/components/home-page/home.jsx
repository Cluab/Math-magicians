import React from 'react';
import './home.css';
// adding the home page Component
const HomePage = () => (
  <>
    <div className="homeContainer">
      <h2>Welcome to our website</h2>
      <h3 className="introduction">
        `Math magicians` is a website for all fans of mathematics.
        It is a Single Page App (SPA) that allows users to:
        1. Make simple calculations.
        2.Read a random math-related quote.
      </h3>
    </div>
  </>
);
export default HomePage;
