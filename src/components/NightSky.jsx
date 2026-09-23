import React, { useMemo } from 'react';
import './NightSky.css';

// Generate static box-shadows so they don't re-render and cause flickering
const generateStars = (count, size, color) => {
  let shadows = [];
  for (let i = 0; i < count; i++) {
    shadows.push(`${Math.floor(Math.random() * 100)}vw ${Math.floor(Math.random() * 100)}vh ${size}px ${color}`);
  }
  return shadows.join(', ');
};

const NightSky = ({ isDark }) => {
  const starsSmall = useMemo(() => generateStars(150, 1, 'rgba(255, 255, 255, 0.7)'), []);
  const starsMedium = useMemo(() => generateStars(70, 2, 'rgba(255, 255, 255, 0.8)'), []);
  const starsLarge = useMemo(() => generateStars(30, 3, 'rgba(255, 255, 255, 1)'), []);

  if (!isDark) return null;

  return (
    <div className="night-sky-container">
      {/* Static / Twinkling Stars */}
      <div className="stars-layer stars-small" style={{ boxShadow: starsSmall }}></div>
      <div className="stars-layer stars-medium" style={{ boxShadow: starsMedium }}></div>
      <div className="stars-layer stars-large" style={{ boxShadow: starsLarge }}></div>

      {/* Shooting Stars (Tail stars) */}
      <div className="shooting-star" style={{ top: '10%', left: '80%', animationDelay: '0s' }}></div>
      <div className="shooting-star" style={{ top: '30%', left: '110%', animationDelay: '4s' }}></div>
      <div className="shooting-star" style={{ top: '60%', left: '90%', animationDelay: '8s' }}></div>
    </div>
  );
};

export default NightSky;
