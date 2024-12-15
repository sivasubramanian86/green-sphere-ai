// src/components/ImageUpload.js
import React, { useState } from 'react';
import { useAuth } from '../authContext';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import './ImageUpload.css';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (image) {
      setLoading(true);
      const formData = new FormData();
      formData.append('image', image);
      try {
        const response = await fetch('/api/v1/images', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          console.error('Failed to upload image:', response.statusText);
          return;
        }

        const data = await response.json();
        setResult(data.result); // Set the result from the server
      } catch (error) {
        console.error('Error uploading image:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="image-upload-container">
      <h2 className="image-upload-header">Upload Image</h2>
      {currentUser && <p>Welcome back, {currentUser.email}!</p>}
      <form onSubmit={handleImageUpload} className="image-upload-form">
        <input
          type="file"
          className="image-upload-input"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit" className="image-upload-button" disabled={loading}>
          {loading ? <BeatLoader size={10} color="#fff" /> : 'Upload'}
        </button>
      </form>
      {result && <p className="image-upload-result">Result: {result}</p>}
    </div>
  );
};

export default ImageUpload;

