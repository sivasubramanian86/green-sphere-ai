// src/components/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';
import { BeatLoader } from 'react-spinners'; 
import './SignIn.css'; // Create and import SignIn.css for styles

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log('handleSignIn called');
    setLoading(true);
    try {
      await signIn(email, password);
      console.log('Signed in successfully');
      navigate('/dashboard'); // Redirect to Dashboard
    } catch (error) {
       console.error('Error signing in:', error);
    } finally { 
       setLoading(false); 
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? <BeatLoader size={10} color="#fff" /> : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
