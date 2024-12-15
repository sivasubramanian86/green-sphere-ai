// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Green Sphere AI</h1>
        <p>Your partner in sustainable living.</p>
      </header>
      <nav className="home-nav">
        <Link to="/signup" className="home-link">Sign Up</Link>
        <Link to="/signin" className="home-link">Sign In</Link>
	<Link to="/ecoplanner" className="home-link">EcoPlanner</Link> 
	<Link to="/ecoguide" className="home-link">Virtual Eco Guide</Link>
      </nav>
      <section className="home-content">
        <h2>About Us</h2>
        <p>Green Sphere AI is dedicated to helping you make eco-friendly choices and live sustainably. Join us on this journey to a greener world.Green Sphere AI is dedicated to promoting sustainable living through innovative technology. Our platform helps users make eco-friendly choices and provides valuable insights into environmental impact. Join us in our mission to create a greener, healthier planet.</p>
      <h2>Helpful Links</h2>
      <ul> 
	<li><a href="https://www.unep.org/" target="_blank" rel="noopener noreferrer">UN Environment Programme</a></li> 
	<li><a href="https://www.wwf.org/" target="_blank" rel="noopener noreferrer">World Wildlife Fund</a></li>
	<li><a href="https://www.nationalgeographic.com/environment/" target="_blank" rel="noopener noreferrer">National Geographic Environment</a></li> 
	<li><a href="https://www.greenpeace.org/" target="_blank" rel="noopener noreferrer">Greenpeace</a></li> 
      </ul>
      </section>
    </div>
  );
};

export default Home;

