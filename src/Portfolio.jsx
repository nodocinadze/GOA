// Portfolio.jsx
import React from 'react';

const Portfolio = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Portfolio</h1>
      <div>
        <h2>Projects</h2>
        <ul>
          <li>Project 1 - React App</li>
          <li>Project 2 - Node.js Backend</li>
          <li>Project 3 - Full-Stack Application</li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
      </div>
    </div>
  );
};

export default Portfolio;