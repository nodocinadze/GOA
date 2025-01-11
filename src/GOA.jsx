import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <h1>Goal Oriented Academy</h1>
      <p>Unlock your potential with focused learning and skill-building.</p>
    </header>
  );
}

function Features() {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Personalized Learning</h3>
          <p>Courses tailored to your individual goals and pace.</p>
        </div>
        <div className="feature-item">
          <h3>Expert Mentors</h3>
          <p>Learn from industry professionals and educators.</p>
        </div>
        <div className="feature-item">
          <h3>Community Support</h3>
          <p>Collaborate and grow with like-minded peers.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Goal Oriented Academy. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <Features />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));