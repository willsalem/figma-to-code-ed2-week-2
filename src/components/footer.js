import React from 'react';
import './style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>BALLAMAS</h2>
          <p>
            Subscribe to our newsletter for upcoming products and best discount for all items
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
        <div className="footer-links">
          <div className="link-column">
            <h3><a href="/product">Product</a></h3>
            <ul>
              <li>Jacket</li>
              <li>T-Shirt</li>
              <li>Shoes</li>
              <li>Sunglasses</li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Categories</h3>
            <ul>
              <li>Man</li>
              <li>Woman</li>
              <li>Kids</li>
              <li>Gift</li>
              <li>New arrival</li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Our Social Media</h3>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Youtube</li>
              <li>X</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-credit">&copy; BALLAMAS 2024 by Waris</p>
    </footer>
  );
};

export default Footer;
