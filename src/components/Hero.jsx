import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './Hero.css';
import heroImg1 from '../assets/hero.png';
import heroImg2 from '../assets/hero2.png';
import heroImg3 from '../assets/hero3.png';

const Hero = () => {
  const images = [heroImg1, heroImg2, heroImg3];

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Side: Text Content */}
        <div className="hero-content" data-aos="fade-right">
          <p className="subtitle">SOFT CARE FOR BRIGHT TOMORROW</p>
          <h1 className="title">Happy Babies<br/>Happier Days</h1>
          <p className="description">
            Premium baby pants designed for your<br/>
            little one's comfort, care and smile.
          </p>
          
          <div className="hero-features">
            <div className="feature-item">
              <div className="icon-circle text-blue"><i className="fa-solid fa-leaf"></i></div>
              <span>Ultra Soft</span>
            </div>
            <div className="feature-item">
              <div className="icon-circle text-pink"><i className="fa-solid fa-shield-halved"></i></div>
              <span>Gentle & Safe</span>
            </div>
            <div className="feature-item">
              <div className="icon-circle text-red"><i className="fa-solid fa-heart"></i></div>
              <span>All Day Comfort</span>
            </div>
          </div>
          
          <a href="#products" className="btn btn-primary hero-btn">
            Shop Now <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        
        {/* Right Side: Image Slider */}
        <div className="hero-slider-wrapper" data-aos="fade-left" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="hero-swiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="hero-slide-img">
                  <img src={img} alt={`Happy Baby ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="floating-badge" data-aos="zoom-in" data-aos-delay="500">
            For a<br/>Brighter<br/>Tomorrow <i className="fa-solid fa-heart text-pink"></i>
          </div>
        </div>

      </div>
      
      {/* Decorative Elements */}
      <div className="decor decor-1"><i className="fa-solid fa-moon"></i></div>
      <div className="decor decor-2"><i className="fa-solid fa-star"></i></div>
      <div className="decor decor-3"><i className="fa-solid fa-star"></i></div>
    </section>
  );
};

export default Hero;
