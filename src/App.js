// import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import images from './data/images';
import Login from './pages/Login';
import React, { useState, useEffect } from 'react';
  

import UploadForm from './components/UploadForm';

function App() {
  const [selectedVibe, setSelectedVibe] = useState('All');
  const [modalImage, setModalImage] = useState(null);
  const [user, setUser] = useState(null);
  const [userImages, setUserImages] = useState([]);
  const [showUpload, setShowUpload] = useState(false); // NEW
  // const [favorites, setFavorites] = useState([]);
  const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem('favorites');
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}, [favorites]);


  const handleUpload = (newImage) => {
    setUserImages([newImage, ...userImages]);
    setShowUpload(false); // Close form after ng upload ng file
  };

  const toggleFavorite = (id) => {
  setFavorites((prev) =>
    prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
  );
};


  const allImages = [...userImages, ...images];
  const filteredImages =
  selectedVibe === 'All'
    ? allImages
    : selectedVibe === 'Favorites'
    ? allImages.filter((img) => favorites.includes(img.id))
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
                <Navbar
                  selectedVibe={selectedVibe}
                  setSelectedVibe={setSelectedVibe}
                  toggleUpload={() => setShowUpload(!showUpload)} // NEW
                  isUploadVisible={showUpload}
                />
                <div className={`upload-wrapper ${showUpload ? 'open' : ''}`}>
  <UploadForm onUpload={handleUpload} />
</div>
 
                <Gallery
  images={filteredImages}
  openModal={setModalImage}
  favorites={favorites}
  toggleFavorite={toggleFavorite}
   modalImage={modalImage} 
/>


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
