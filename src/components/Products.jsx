import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import './Products.css';
import productImg from '../assets/product.png';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Babyboo Premium Pants - Size S',
      price: 'Rs. 1,450.00',
      description: 'Perfect for newborns up to 6 months. Features 12-hour advanced absorption, ultra-soft breathable cotton, and a wetness indicator to keep your baby completely dry and comfortable.',
      badge: 'New',
      image: productImg,
      colorClass: 'card-pink'
    },
    {
      id: 2,
      name: 'Babyboo Premium Pants - Size M',
      price: 'Rs. 1,550.00',
      description: 'Designed for crawling babies. Includes a 360-degree flexible waistband for ultimate freedom of movement, along with our signature magic gel core technology.',
      badge: 'Popular',
      image: productImg,
      colorClass: 'card-blue'
    },
    {
      id: 3,
      name: 'Babyboo Premium Pants - Size L',
      price: 'Rs. 1,650.00',
      description: 'Ideal for walking toddlers. Extra reinforced leak guards and super-absorbent layers ensure completely uninterrupted sleep throughout the night.',
      badge: '',
      image: productImg,
      colorClass: 'card-yellow'
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
        
        <div className="products-grid">
          {products.map((product, index) => (
            <Tilt key={product.id} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="tilt-wrapper" data-aos="fade-up" data-aos-delay={index * 150}>
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
          ))}
        </div>
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
                
                <a href="tel:+94777763766" className="modal-btn w-100" style={{display: 'flex', justifyContent: 'center', textDecoration: 'none'}}>
                  Order Now <i className="fa-solid fa-phone" style={{marginLeft: '10px'}}></i>
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
