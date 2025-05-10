import React, { useState } from 'react';

const UploadForm = ({ onUpload }) => {
  // const [url, setUrl] = useState(''); alisin na URL SET UP
  const [vibe, setVibe] = useState('Cozy'); 
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);


  const handleSubmit = (e) => {
  e.preventDefault();
  if (!file || !description) return;

  const imageUrl = URL.createObjectURL(file); // 👈 Convert file to local URL

  const newImage = {
    id: Date.now(),
    url: imageUrl,
    vibe,
    description,
  };

  onUpload(newImage);

  // Reset form
  setFile(null);
  setVibe('Cozy');
  setDescription('');
};

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h3>Upload a Vibe</h3>
      <input
  type="file"
  accept="image/*"
  onChange={(e) => setFile(e.target.files[0])}
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
