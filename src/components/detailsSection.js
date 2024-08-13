import React from "react";
import "./detailsSection.css";

const DetailsSection = () => {
  return (
    <section className="details-section">
      <div className="image-container">
        <img
          src="lien-vers-ton-image"
          alt="Badacore Tshirt"
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h1>Badacore Tshirt</h1>
        <p className="price">CAD $80</p>
        <div className="color">
          <span>Color: </span>
          <span className="color-options">
            <span className="color-dot green"></span>
            <span className="color-dot blue"></span>
            <span className="color-dot brown"></span>
          </span>
        </div>
        <div className="size">
          <span>Size: </span>
          <div className="size-options">
            <button className="size-btn">XS</button>
            <button className="size-btn">S</button>
            <button className="size-btn">M</button>
            <button className="size-btn">L</button>
            <button className="size-btn">XL</button>
          </div>
        </div>
        <div className="action-buttons">
          <button className="buy-now">BUY NOW</button>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
