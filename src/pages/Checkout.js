import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Checkout.css";
import bank from "../icon/bank.png";
import card from "../icon/card.png";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { products, subtotal } = location.state || {
    products: [],
    subtotal: 0,
  };

  const handlePayment = (event) => {
    event.preventDefault();
    navigate("/thank");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-order">
          <h2>Checkout</h2>
          <h3>Your Order</h3>
          <p>
            By placing your order, you agree to Balansa's Privacy and Policy
          </p>
          <div className="order-items">
            {products.map((product, index) => (
              <div className="order-item" key={index}>
                <img src={product.image} alt={product.title} />
                <div className="item-details">
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                </div>
                <p className="item-price"> ${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="discount-code">
            <input type="text" placeholder="Add discount code" />
            <button type="button">Apply</button>
          </div>
          <div className="order-summary">
            <p>
              Subtotal: <span>${Number(subtotal).toFixed(2)}</span>
            </p>
            <p>
              Discount: <span>$0.00</span>
            </p>
            <p>
              Order total: <span>${Number(subtotal).toFixed(2)}</span>
            </p>
          </div>
          <div className="shipping-method">
            <h4>Shipping method</h4>
            <div className="shipping-option">
              <input
                type="radio"
                id="free-shipping"
                name="shipping"
                value="free"
                defaultChecked
              />
              <label htmlFor="free-shipping">
                <div className="shipping-details">
                  <span className="shipping-title">Free shipping</span>
                  <span className="shipping-days">7-30 business days</span>
                </div>
                <span className="shipping-price">$0</span>
              </label>
            </div>
            <div className="shipping-option">
              <input
                type="radio"
                id="regular-shipping"
                name="shipping"
                value="regular"
              />
              <label htmlFor="regular-shipping">
                <div className="shipping-details">
                  <span className="shipping-title">Regular shipping</span>
                  <span className="shipping-days">3-14 business days</span>
                </div>
                <span className="shipping-price">$7.50</span>
              </label>
            </div>
            <div className="shipping-option">
              <input
                type="radio"
                id="express-shipping"
                name="shipping"
                value="express"
              />
              <label htmlFor="express-shipping">
                <div className="shipping-details">
                  <span className="shipping-title">Express shipping</span>
                  <span className="shipping-days">1-3 business days</span>
                </div>
                <span className="shipping-price">$22.50</span>
              </label>
            </div>
          </div>
        </div>

        <div className="checkout-payment">
          <h3>Payment details</h3>
          <p>Complete your purchase by providing your payment details.</p>
          <h3>Shipping address</h3>
          <form onSubmit={handlePayment}>
            <div className="shipping-address">
              <div className="input-group">
                <input type="text" placeholder="First name" required />
                <input type="text" placeholder="Last name" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email address" required />
                <input type="tel" placeholder="Phone number" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Address" required />
                <input type="text" placeholder="City" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Region" required />
                <input type="text" placeholder="Postal code" required />
              </div>
            </div>

            <div className="payment-method">
              <p>Select payment method</p>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  defaultChecked
                />
                <img src={card} alt="Card Icon" className="payment-icon" />
                Debit/Credit Card
              </label>
              <label>
                <input type="radio" name="payment" value="virtual" />
                <img src={bank} alt="Bank Icon" className="payment-icon" />
                Virtual Account
              </label>
            </div>

            <div className="card-details">
              <input type="text" placeholder="Card number" required />
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Expiration date (MM/YY)"
                  required
                />
                <input type="text" placeholder="Security code" required />
              </div>
            </div>

            <div className="use-shipping-address">
              <label>
                <input type="checkbox" /> Use shipping address as billing
                address
              </label>
            </div>

            <button type="submit" className="pay-button">
              Pay ${Number(subtotal).toFixed(2)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
