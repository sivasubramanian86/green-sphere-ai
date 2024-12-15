// src/components/VirtualEcoGuide.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './VirtualEcoGuide.css';

const tips = [
  'Reduce, reuse, and recycle.',
  'Conserve water.',
  'Use energy-efficient appliances.',
  'Walk or bike instead of driving.',
  'Support local and eco-friendly businesses.',
  'Switch to LED bulbs.',
  'Install a smart thermostat.',
  'Upgrade to energy-efficient appliances.',
  'Fix leaks promptly.',
  'Install low-flow fixtures.',
  'Use drought-resistant plants.',
  'Avoid single-use plastics.',
  'Buy in bulk to reduce packaging.',
  'Repair and repurpose items.',
  'Carpool or use ride-sharing services.',
  'Consider switching to an electric vehicle.',
  'Incorporate more plant-based meals into your diet.',
  'Buy seasonal and local produce.',
  'Plan meals to reduce food waste.',
  'Use eco-friendly cleaning products.',
  'Use sustainable materials for home renovations.',
  'Add indoor plants to improve air quality.',
  'Stay informed about environmental issues.',
  'Join eco-friendly groups or online communities.',
  'Support policies that promote sustainability.',
  'Spend time in nature to boost mental and physical health.',
  'Be mindful of your consumption habits.',
  'Choose sustainable travel options.'
];

const VirtualEcoGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="virtual-eco-guide">
      <header className="virtual-eco-guide-header">
        <h2>Virtual Eco Guide</h2>
      </header>
      <nav className="virtual-eco-guide-nav">
        <Link to="/" className="virtual-eco-guide-link">Home</Link>
        <button onClick={() => navigate(-1)} className="virtual-eco-guide-link">Back</button>
      </nav>
      <div className="virtual-eco-guide-content">
        <p>Here are some tips to help you live a more eco-friendly lifestyle:</p>
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VirtualEcoGuide;

