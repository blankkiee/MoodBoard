import React from 'react';

const Modal = ({ image, closeModal }) => {
  if (!image) return null;

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.url} alt={image.vibe} />
        <p>{image.description}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
