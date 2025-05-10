import React from 'react';
import ImageCard from './ImageCard';

const Gallery = ({ images, openModal }) => {
  return (
    <div className="gallery">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} openModal={openModal} />
      ))}
    </div>
  );
};

export default Gallery;
