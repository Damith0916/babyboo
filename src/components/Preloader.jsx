import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${loading ? '' : 'fade-out'}`}>
      <div className="preloader-content">
        <div className="baby-icon">
          <i className="fa-solid fa-baby-carriage"></i>
        </div>
        <h2 className="loading-text">Baby<span>boo</span></h2>
        <div className="loading-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
