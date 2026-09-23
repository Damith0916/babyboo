import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MagicLayers from './components/MagicLayers';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import NightSky from './components/NightSky';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  return (
    <div className={`app-container ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <NightSky isDark={isDark} />
      <Preloader />
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <MagicLayers />
      <Products />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
