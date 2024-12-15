// src/components/SignOut.js
import React from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully!');
      navigate('/'); // Redirect to home page after sign-out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="sign-out">
      <h2>Sign Out</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;

