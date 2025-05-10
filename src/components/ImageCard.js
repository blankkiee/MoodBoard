import React from 'react';

const ImageCard = ({ image, openModal }) => {
  return (
    <div className="image-card" onClick={() => openModal(image)}>
      <img src={image.url} alt={image.vibe} />
      <div className="overlay">{image.vibe}</div>
    </div>
  );
};

export default ImageCard;
