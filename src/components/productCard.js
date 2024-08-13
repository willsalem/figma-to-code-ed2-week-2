import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/productCard.css";
import cart from "../icon/cart.png";

const ProductCard = ({ id, image, title, price }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart", {
      state: {
        product: { id, image, title, price },
      },
    });
  };

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        products: [
          {
            id,
            image,
            title,
            price: Number(price),
            quantity: 1,
            totalPrice: Number(price),
          },
        ],
        subtotal: Number(price),
      },
    });
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
        <div className="overlay">
          <button className="overlay-button" onClick={handleAddToCart}>
            <img src={cart} alt="cart icon" className="cart-icon" />
            ADD TO CART
          </button>
          <button className="overlay-button2" onClick={handleBuyNow}>
            BUY NOW
          </button>
        </div>
      </div>
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
