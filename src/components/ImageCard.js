import React from 'react';

const ImageCard = ({ image, openModal, isFavorite, toggleFavorite, modalImage }) => {
  const handleCardClick = () => {
    openModal(image);
  };

  const handleHeartClick = (e) => {
    e.stopPropagation(); // prevents modal
    toggleFavorite(image.id);
  };

  return (
    <div className="image-card" onClick={handleCardClick}>
      <img src={image.url} alt={image.vibe} />
      
      {/* Only show heart when modal is not open */}
      {!modalImage && (
        <div
          className="heart-icon"
          onClick={handleHeartClick}
          role="button"
          aria-label="Toggle Favorite"
        >
          {isFavorite ? '❤️' : '🤍'}
        </div>
      )}

      <div className="overlay">{image.vibe}</div>
    </div>
  );
};

export default ImageCard;
