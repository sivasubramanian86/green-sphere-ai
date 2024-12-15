// src/components/EcoPlanner.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EcoPlanner.css';

const EcoPlanner = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const navigate = useNavigate();

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="eco-planner">
      <header className="eco-planner-header">
        <h2>EcoPlanner</h2>
      </header>
      <nav className="eco-planner-nav">
        <Link to="/" className="eco-planner-link">Home</Link>
        <button onClick={() => navigate(-1)} className="eco-planner-link">Back</button>
      </nav>
      <div className="eco-planner-content">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new eco-friendly task"
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EcoPlanner;

