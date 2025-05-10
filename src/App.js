import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import images from './data/images';
import Login from './pages/Login';

import UploadForm from './components/UploadForm'; // <-- import at the top

function App() {
  const [selectedVibe, setSelectedVibe] = useState('All');
  const [modalImage, setModalImage] = useState(null);
  const [user, setUser] = useState(null);
  const [userImages, setUserImages] = useState([]); // <-- new

  const handleUpload = (newImage) => {
    setUserImages([newImage, ...userImages]);
  };

  const allImages = [...userImages, ...images]; // merge with static ones
  const filteredImages =
    selectedVibe === 'All'
      ? allImages
      : allImages.filter((img) => img.vibe === selectedVibe);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <div className="App">
                <h1>MoodBoard 🎨</h1>
                <Navbar selectedVibe={selectedVibe} setSelectedVibe={setSelectedVibe} />
                <UploadForm onUpload={handleUpload} /> {/* new */}
                <Gallery images={filteredImages} openModal={setModalImage} />
                <Modal image={modalImage} closeModal={() => setModalImage(null)} />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={setUser} />} />
      </Routes>
    </Router>
  );
}


export default App;
