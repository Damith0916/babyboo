import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Products.css';
import img1 from '../assets/babyboo-product-1.jpeg';
import img2 from '../assets/babyboo-product-2.jpeg';
import img3 from '../assets/babyboo-product-3.jpeg';
import img4 from '../assets/babyboo-product-4.jpeg';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Babyboo Premium Pants - Size S',
      price: 'Rs. 1,450.00',
      description: 'Perfect for newborns up to 6 months. Features 12-hour advanced absorption, ultra-soft breathable cotton, and a wetness indicator to keep your baby completely dry and comfortable.',
      badge: 'New',
      image: img1,
      colorClass: 'card-pink'
    },
    {
      id: 2,
      name: 'Babyboo Premium Pants - Size M',
      price: 'Rs. 1,550.00',
      description: 'Designed for crawling babies. Includes a 360-degree flexible waistband for ultimate freedom of movement, along with our signature magic gel core technology.',
      badge: 'Popular',
      image: img2,
      colorClass: 'card-blue'
    },
    {
      id: 3,
      name: 'Babyboo Premium Pants - Size L',
      price: 'Rs. 1,650.00',
      description: 'Ideal for walking toddlers. Extra reinforced leak guards and super-absorbent layers ensure completely uninterrupted sleep throughout the night.',
      badge: '',
      image: img3,
      colorClass: 'card-yellow'
    },
    {
      id: 4,
      name: 'Babyboo Premium Pants - Size XL',
      price: 'Rs. 1,750.00',
      description: 'For active older babies. Maximum absorption capacity with stretchable comfort to support their every step.',
      badge: 'Sale',
      image: img4,
      colorClass: 'card-green'
    }
  ];

  const closeModal = () => setSelectedProduct(null);

  return (
    <section id="products" className="section products-section">
      <div className="container text-center">
        <div className="section-title-wrap">
          <h2 className="section-title" data-aos="fade-up">Meet Our Products <i className="fa-solid fa-heart text-pink"></i></h2>
          <div className="section-divider" data-aos="fade-up" data-aos-delay="50"><span></span><span></span><span></span></div>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Carefully designed for every stage of your baby's journey.</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="products-swiper"
          style={{ paddingTop: '10px', paddingBottom: '60px' }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="tilt-wrapper" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className={`product-card ${product.colorClass}`}>
                  <div className="product-img-wrapper">
                    <img src={product.image} alt={product.name} />
                    <div className="star decor-star"><i className="fa-solid fa-star"></i></div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-actions">
                      <button
                        className="btn-outline"
                        onClick={() => setSelectedProduct(product)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={closeModal}>
          <div className="product-modal" onClick={e => e.stopPropagation()} data-aos="zoom-in" data-aos-duration="300">
            <button className="modal-close" onClick={closeModal}>
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="modal-content">
              <div className="modal-image-col">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                {selectedProduct.badge && <span className="badge">{selectedProduct.badge}</span>}
              </div>
              <div className="modal-info-col">
                <h3>{selectedProduct.name}</h3>
                <h4 className="modal-price">{selectedProduct.price}</h4>

                <div className="modal-features">
                  <div className="modal-feature"><i className="fa-solid fa-check text-yellow"></i> 100% Soft Cotton</div>
                  <div className="modal-feature"><i className="fa-solid fa-check text-yellow"></i> 12 Hours Protection</div>
                  <div className="modal-feature"><i className="fa-solid fa-check text-yellow"></i> Magic Gel Core</div>
                </div>

                <p className="modal-description">{selectedProduct.description}</p>

                <a href="tel:+94777763766" className="modal-btn w-100" style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none' }}>
                  Order Now <i className="fa-solid fa-phone" style={{ marginLeft: '10px' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
