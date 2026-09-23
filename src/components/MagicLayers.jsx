import React from 'react';
import './MagicLayers.css';
import diaperImg from '../assets/diaper.png';

const MagicLayers = () => {
  return (
    <section id="magic-layers" className="section magic-section">
      <div className="container text-center">
        <h2 className="section-title" data-aos="fade-up">Babyboo Advanced Technology</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Everything your baby needs for maximum comfort and protection.
        </p>
        
        <div className="magic-wrapper">
          {/* Center Static Diaper */}
          <div className="center-image-wrapper" data-aos="zoom-in" data-aos-delay="200">
            <img src={diaperImg} alt="Babyboo Premium Diaper" className="center-diaper" />
          </div>

          {/* Rotating Orbit Container */}
          <div className="orbit-container" data-aos="fade-in" data-aos-delay="400">
            <div className="orbit-ring"></div>
            
            {/* Node 1: Top Left */}
            <div className="orbit-wrapper wrapper-tl">
              <div className="feature-node card-blue">
                <div className="node-icon"><i className="fa-solid fa-wind"></i></div>
                <div className="node-text">
                  <h4>Breathable Cover</h4>
                  <p>Prevents rashes</p>
                </div>
              </div>
            </div>

            {/* Node 2: Top Right */}
            <div className="orbit-wrapper wrapper-tr">
              <div className="feature-node card-pink flex-reverse">
                <div className="node-icon"><i className="fa-solid fa-droplet"></i></div>
                <div className="node-text text-right">
                  <h4>Magic Gel Core</h4>
                  <p>12 hours protection</p>
                </div>
              </div>
            </div>

            {/* Node 3: Bottom Right */}
            <div className="orbit-wrapper wrapper-br">
              <div className="feature-node card-yellow flex-reverse">
                <div className="node-icon"><i className="fa-solid fa-feather"></i></div>
                <div className="node-text text-right">
                  <h4>100% Soft Cotton</h4>
                  <p>Cloud-like comfort</p>
                </div>
              </div>
            </div>

            {/* Node 4: Bottom Left */}
            <div className="orbit-wrapper wrapper-bl">
              <div className="feature-node card-green">
                <div className="node-icon"><i className="fa-solid fa-compress"></i></div>
                <div className="node-text">
                  <h4>Flexi-Fit Waistband</h4>
                  <p>Freedom to move</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicLayers;
