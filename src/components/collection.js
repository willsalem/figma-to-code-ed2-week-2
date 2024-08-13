import React from 'react';
import './style/collection.css';
import shaket from '../images/shacket.png'; 
import abraham from '../images/abraham.png'; 
import arrow from '../icon/arrow.png';

const Collection = () => {
  return (
    <div className="collection">
      <h1 className="collection-title">OUR COLLECTION</h1>
      <p className="collection-description">Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
      <div className="collection-images">
        <div className="collection-image-container">
          <img src={shaket} alt="Collection 1" className="collection-image" />
          <button className="learn-more-button">
            LEARN MORE 
            <img src={arrow} alt="arrow icon" className="arrow-icon" />
          </button>
        </div>
        <div className="collection-image-container large">
          <img src={abraham} alt="Collection 2" className="collection-image" />
          <div className="overlay-text">
            <h1>CLASSIC MEN</h1>
            <p>We're changing the way this things get made</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
