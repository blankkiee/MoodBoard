import React from 'react';

const Navbar = ({ selectedVibe, setSelectedVibe }) => {
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
    </nav>
  );
};

export default Navbar;
