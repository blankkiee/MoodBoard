import React from 'react';

const Navbar = ({ selectedVibe, setSelectedVibe, toggleUpload, isUploadVisible }) => {
  const vibes = ['All', 'Cozy', 'Nature', 'Retro', 'Minimal'];

  return (
    <nav className="navbar">
      {vibes.map((vibe) => (
        <button
          key={vibe}
          className={vibe === selectedVibe ? 'active' : ''}
          onClick={() => setSelectedVibe(vibe)}
        >
          {vibe}
        </button>
      ))}
      <button
        className={selectedVibe === 'Favorites' ? 'active' : ''}
        onClick={() => setSelectedVibe('Favorites')}
      >
        ❤️ Favorites
      </button>
      <button onClick={toggleUpload}>
        {isUploadVisible ? 'Close Upload' : '+ Upload'}
      </button>
    </nav>
  );
};

export default Navbar;
