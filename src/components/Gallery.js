import React from 'react';
import ImageCard from './ImageCard';

const Gallery = ({ images, openModal, favorites, toggleFavorite }) => {
  return (
    <div className="gallery">
      {images.map((img) => (
        <ImageCard
          key={img.id}
          image={img}
          openModal={openModal}
          isFavorite={favorites.includes(img.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default Gallery;
