// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../authContext';
import './Dashboard.css';

const Dashboard = () => {
  const [bigQueryData, setBigQueryData] = useState([]);
  const [columns, setColumns] = useState([]); 
  const { currentUser } = useAuth(); // Access current user from context

  useEffect(() => {
    const fetchBigQueryData = async () => {
      try {
        const response = await fetch('/api/v1/bigquery');
        if (!response.ok) {
          console.error('Failed to fetch BigQuery data:', response.statusText);
          return;
        }
        const data = await response.json();
        console.log('Fetched BigQuery Data:', data); // Debug: Log fetched data
	if (data.length > 0) { 
		setColumns(Object.keys(data[0])); // Extract column names from the first row
	}
        setBigQueryData(data);
      } catch (error) {
        console.error('Error fetching BigQuery data:', error);
      }
    };

    fetchBigQueryData();
  }, []);

 // Specify the columns to display 
  const columnsToDisplay = ['Year', 'World', 'Asia', 'Africa', 'Europe', 'North America', 'Latin America']; // Replace with your column names

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to GreenSphere AI</h1>
	{currentUser && <p>Welcome back, {currentUser.email}!</p>} {/* Conditionally render welcome message */}
        <p>Your hub for sustainable living.</p>
      </header>
      <nav className="dashboard-nav">
        <Link to="/ecoplanner" className="dashboard-link">EcoPlanner</Link>
        <Link to="/ecoguide" className="dashboard-link">Virtual Eco Guide</Link>
        <Link to="/imageupload" className="dashboard-link">Upload Image</Link>
        <Link to="/signout" className="dashboard-link">Sign Out</Link>
      </nav>
      <section className="dashboard-content">
        <h2>Explore GreenSphere AI</h2>
        <p>Use the EcoPlanner to organize your eco-friendly tasks and learn more about sustainable practices with our Virtual Eco Guide.</p>
        <h2>BigQuery Data</h2>
	<h3>Energy Consumption History Across Continents Over Years in TWH (Tera Watt Hours)</h3>
        {bigQueryData.length > 0 ? (
          <table>
            <thead>
              <tr>
                {columnsToDisplay.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bigQueryData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columnsToDisplay.map((column, colIndex) => (
                    <td key={colIndex}>{row[column]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )} 
      </section>
    </div>
  );
};

export default Dashboard;

