import React from 'react';
import './Features.css';
import bannerImg from '../assets/banner.png';

const Features = () => {
  return (
    <section id="features" className="section features-section">
      <div className="container text-center">
        <h2 className="section-title" data-aos="fade-up">Why Parents Love Babyboo <i className="fa-solid fa-heart text-pink"></i></h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Because your baby deserves the best.</p>
        
        <div className="features-grid">
          <div className="feature-box" data-aos="zoom-in" data-aos-delay="0">
            <div className="feature-icon bg-light-green"><i className="fa-solid fa-leaf"></i></div>
            <h3>Ultra Soft Material</h3>
            <p>Gentle on your baby's sensitive skin</p>
          </div>
          
          <div className="feature-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="feature-icon bg-light-blue"><i className="fa-solid fa-droplet"></i></div>
            <h3>High Absorbency</h3>
            <p>Keeps your baby dry for longer</p>
          </div>
          
          <div className="feature-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="feature-icon bg-light-yellow"><i className="fa-solid fa-shield-halved"></i></div>
            <h3>Leak Protection</h3>
            <p>Stay confident day and night</p>
          </div>
          
          <div className="feature-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="feature-icon bg-light-pink"><i className="fa-solid fa-heart"></i></div>
            <h3>Comfortable Fit</h3>
            <p>Freedom for every little move</p>
          </div>
        </div>

        {/* Banner inside features section */}
        <div className="banner-box" data-aos="fade-up">
          <div className="banner-img">
            <img src={bannerImg} alt="Baby Steps" />
          </div>
          <div className="banner-content">
            <h2 data-aos="fade-right" data-aos-delay="200">Little Steps<br/>Big Dreams <i className="fa-regular fa-sun text-yellow"></i></h2>
            <p data-aos="fade-right" data-aos-delay="300">We're here to support every step of your baby's journey with love, comfort and care.</p>
            <button className="btn btn-primary" data-aos="zoom-in" data-aos-delay="400">Shop Now <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
