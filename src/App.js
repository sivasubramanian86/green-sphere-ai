// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import EcoPlanner from './components/EcoPlanner';
import VirtualEcoGuide from './components/VirtualEcoGuide';
import Dashboard from './components/Dashboard';
import ImageUpload from './components/ImageUpload';
import { AuthProvider } from './authContext';

function App() {
  return (
   <AuthProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
	  <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ecoplanner" element={<EcoPlanner />} />
          <Route path="/ecoguide" element={<VirtualEcoGuide />} />
	  <Route path="/imageupload" element={<ImageUpload />} />
	  <Route path="/signout" element={<SignOut />} />
        </Routes>
      </div>
    </Router>
   </AuthProvider>
  );
}

export default App;

