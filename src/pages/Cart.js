import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Cart.css";
import plus from "../icon/plus.png";
import remove from "../icon/remove.png";
import trash from "../icon/trash.png";

const Cart = () => {
  const [quantities, setQuantities] = useState([2, 1, 2]);
  const products = [
    {
      id: 1,
      title: "T-Shirt",
      description: "Green - Large",
      price: 87,
      image:
        "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenMenscrew01.jpg?v=1675454919",
    },
    {
      id: 2,
      title: "Men's Dri-FIT Golf Jacket",
      description: "Ocean - Large",
      price: 100,
      image:
        "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/OceanMenscrew01.jpg?v=1675455641",
    },
    {
      id: 3,
      title: "Tatum 2 'Red Cement'",
      description: "Size: 15",
      price: 125,
      image:
        "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/ClayMenscrew01.jpg?v=1675455641",
    },
  ];

  const navigate = useNavigate();

  const calculateTotal = () => {
    return products.reduce((total, product, index) => {
      return total + product.price * quantities[index];
    }, 0);
  };

  const updateQuantity = (index, amount) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] + amount >= 1) {
      newQuantities[index] += amount;
      setQuantities(newQuantities);
    }
  };

  const removeItem = (index) => {
    const newQuantities = [...quantities];
    newQuantities.splice(index, 1);
    setQuantities(newQuantities);
    products.splice(index, 1);
  };

  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        products: products.map((product, index) => ({
          ...product,
          quantity: quantities[index],
          totalPrice: product.price * quantities[index],
        })),
        subtotal: calculateTotal().toFixed(2),
      },
    });
  };

  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-items">
          <div className="cart-header">
            <h2>Cart({quantities.reduce((total, qty) => total + qty, 0)})</h2>
            <button className="clear-cart-button">
              <img src={trash} alt="Clear Cart" /> Clear Cart
            </button>
          </div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>
                    <img
                      className="cart-item-image"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="cart-item-details">
                      <h4>{product.title}</h4>
                      <p>{product.description}</p>
                      <p>${product.price}</p>
                    </div>
                  </td>
                  <td>
                    <div className="quantity-control">
                      <div className="quantity-group">
                        <img
                          src={remove}
                          alt="Decrease quantity"
                          onClick={() => updateQuantity(index, -1)}
                          className="quantity-icon"
                        />
                        <span className="quantity-number">
                          {quantities[index]}
                        </span>
                        <img
                          src={plus}
                          alt="Increase quantity"
                          onClick={() => updateQuantity(index, 1)}
                          className="quantity-icon"
                        />
                      </div>
                      <img
                        src={trash}
                        alt="Remove item"
                        onClick={() => removeItem(index)}
                        className="quantity-icon trash-icon"
                      />
                    </div>
                  </td>
                  <td>${(product.price * quantities[index]).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart-summary">
          <h3>Order summary</h3>
          <p>
            Subtotal <span>${calculateTotal().toFixed(2)}</span>
          </p>
          <p>
            Discount <span>$0.00</span>
          </p>
          <p className="order-total">
            Order total <span>${calculateTotal().toFixed(2)}</span>
          </p>
          <div className="checkout-wrapper">
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
