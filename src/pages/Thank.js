import React from 'react';
import './styles/thank.css';
import frame from '../icon/Frame.png'

const Thank = () => {
  return (
    <div className="checkout2-container">
      <div className="confirmation-message">
        <div className="checkmark">
          <img src={frame} alt="validate" />
        </div>
        <h1>Thanks for your order!</h1>
        <p>The order confirmation has been sent to johndoe@gmail.com</p>
      </div>
    </div>
  );
};

export default Thank;
