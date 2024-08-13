import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import './style/header.css';
import { GiHamburgerMenu, GiCrossedSwords } from 'react-icons/gi';
import search from '../icon/search.png';
import cart from '../icon/cart-2.png';

const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToHome = () => {
    navigate('/');
  };


  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <header className="header-container">
      <div className="top-bar">Sign up and get 20% off for all new arrivals collections</div>
      <nav className="navbar">
        {isMobile ? (
          <>
            <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              {menuOpen ? <GiCrossedSwords /> : <GiHamburgerMenu />}
            </div>
            <div className="logo" onClick={goToHome}>BALLAMAS</div>
            <div className="actions">
              <img src={search} alt="Search" className="icon" />
              <img src={cart} alt="Cart" className="icon" onClick={goToCart} />
            </div>
          </>
        ) : (
          <>
            <ul className="menu">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li><a href="/product">Collection</a></li>
            </ul>
            <div className="logo" onClick={goToHome}>BALLAMAS</div>
            <div className="actions">
              <ul className="menu">
                <li><a href="/product">Shop</a></li>
                <li>About Us</li>
                <li>Account</li>
                <li className="cart-text"><a href='/cart'>Cart(0)</a></li>
              </ul>
              <img src={search} alt="Search" className="icon" />
              <img src={cart} alt="Cart" className="icon cart-icon" onClick={goToCart} />
            </div>
          </>
        )}
        <div className="separator"></div>
      </nav>
      {menuOpen && isMobile && (
        <ul className="mobile-menu">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Collection</li>
          <li><a href="/product">Shop</a></li>
          <li>About Us</li>
          <li>Account</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      )}
    </header>
  );
};

export default Header;
