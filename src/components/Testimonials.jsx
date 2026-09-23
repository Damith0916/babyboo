import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "Really soft and comfortable. My baby sleeps whole night without leaking. Highly recommended!",
      name: "Nimali",
      location: "Colombo"
    },
    {
      id: 2,
      text: "Best quality baby pants we've tried. Super absorbent and gentle on skin.",
      name: "Kasun",
      location: "Kandy"
    },
    {
      id: 3,
      text: "My baby is more active now and these pants are perfect! Great fit and no leaks.",
      name: "Shalini",
      location: "Galle"
    }
  ];

  return (
    <section id="reviews" className="section testimonials-section">
      <div className="container text-center">
        <h2 className="section-title" data-aos="fade-up">What Parents Say <i className="fa-solid fa-heart text-pink"></i></h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Real experiences from happy families.</p>
        
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={review.id} className="review-card" data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
              <p className="review-text">"{review.text}"</p>
              <div className="reviewer-info">
                <div className="avatar"><i className="fa-solid fa-user"></i></div>
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
