import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "Really soft and comfortable. My baby sleeps whole night without leaking. Highly recommended!",
      name: "Nimali",
      location: "Colombo",
      stars: 5
    },
    {
      id: 2,
      text: "Best quality baby pants we've tried. Super absorbent and gentle on skin.",
      name: "Kasun",
      location: "Kandy",
      stars: 5
    },
    {
      id: 3,
      text: "My baby is more active now and these pants are perfect! Great fit and no leaks.",
      name: "Shalini",
      location: "Galle",
      stars: 5
    },
    {
      id: 4,
      text: "Worth every penny! My little one is so comfortable and the material feels premium.",
      name: "Dilani",
      location: "Negombo",
      stars: 5
    },
    {
      id: 5,
      text: "Tried many brands but Babyboo is the best. No rashes, no leaks, happy baby!",
      name: "Roshan",
      location: "Matara",
      stars: 5
    }
  ];

  return (
    <section id="reviews" className="section testimonials-section">
      <div className="container text-center">
        <div className="section-title-wrap">
          <h2 className="section-title" data-aos="fade-up">What Parents Say <i className="fa-solid fa-heart text-pink"></i></h2>
          <div className="section-divider" data-aos="fade-up" data-aos-delay="50"><span></span><span></span><span></span></div>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Real experiences from happy families.</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="reviews-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="review-card">
                  <div className="review-stars">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Make a Review CTA */}
        <div className="make-review-wrap" data-aos="fade-up" data-aos-delay="200">
          <a href="tel:+94777763766" className="btn btn-primary">
            <i className="fa-solid fa-star"></i> Make a Review
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
