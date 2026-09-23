import React, { useEffect, useState } from 'react';
import './Preloader.css';

// Proper Vite imports — asset paths are resolved at build time
import heroImg1 from '../assets/hero.png';
import heroImg2 from '../assets/hero2.png';
import heroImg3 from '../assets/hero3.png';
import productImg from '../assets/product.png';
import ctaImg from '../assets/cta.png';
import bannerImg from '../assets/banner.png';
import diaperImg from '../assets/diaper.png';

const IMAGE_ASSETS = [
  heroImg1, heroImg2, heroImg3,
  productImg, ctaImg, bannerImg, diaperImg,
];

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const total = IMAGE_ASSETS.length;
    let loaded = 0;
    const startTime = Date.now();
    const MIN_DISPLAY = 1200; // minimum ms to show preloader

    const tryFinish = () => {
      loaded++;
      setProgress(Math.round((loaded / total) * 100));
      if (loaded >= total) {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_DISPLAY - elapsed);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setHidden(true), 600); // wait for CSS fade
        }, remaining);
      }
    };

    IMAGE_ASSETS.forEach((src) => {
      const img = new Image();
      img.onload = tryFinish;
      img.onerror = tryFinish; // count errors too so we don't hang
      img.src = src;
    });
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="baby-icon">
          <i className="fa-solid fa-baby-carriage"></i>
        </div>
        <h2 className="loading-text">Baby<span>boo</span></h2>
        <div className="progress-bar-wrapper">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loading-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
