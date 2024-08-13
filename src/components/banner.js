import React from "react";
import "./style/banner.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/product");
  };

  return (
    <section className="banner">
      <div className="container">
        <p>we bring new fashion to the world</p>
        <h2>DISCOVER THE LATEST FASHION HERE</h2>
        <p>
          Discover a world of fashion with our meticulously outfits. Shop now to
          update your wardrobe with chic and stylish outfits.
        </p>
        <button onClick={goToShop} className="shop-now">
          Start shopping
        </button>
      </div>
    </section>
  );
};

export default Banner;
