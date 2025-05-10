import React from 'react';

const ImageCard = ({ image, openModal, isFavorite, toggleFavorite }) => {
  return (
    <div className="image-card" onClick={() => openModal(image)}>
      <img src={image.url} alt={image.vibe} />
      <div className="heart-icon" onClick={(e) => {
        e.stopPropagation(); // prevent modal click
        toggleFavorite(image.id);
      }}>
        {isFavorite ? '❤️' : '🤍'}
      </div>
      <div className="overlay">{image.vibe}</div>
    </div>
  );
};

export default ImageCard;
