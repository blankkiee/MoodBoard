import React, { useState } from 'react';

const UploadForm = ({ onUpload }) => {
  const [url, setUrl] = useState('');
  const [vibe, setVibe] = useState('Cozy');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url || !description) return;

    const newImage = {
      id: Date.now(), // unique ID
      url,
      vibe,
      description,
    };

    onUpload(newImage);
    // Reset form
    setUrl('');
    setVibe('Cozy');
    setDescription('');
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h3>Upload a Vibe</h3>
      <input
        type="text"
        placeholder="Image URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <select value={vibe} onChange={(e) => setVibe(e.target.value)}>
        <option value="Cozy">Cozy</option>
        <option value="Nature">Nature</option>
        <option value="Retro">Retro</option>
        <option value="Minimal">Minimal</option>
      </select>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Image</button>
    </form>
  );
};

export default UploadForm;
