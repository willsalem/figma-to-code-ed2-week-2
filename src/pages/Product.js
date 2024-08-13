import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./styles/product.css";
import ProductCard from 'C:/wamp64/www/ballamas-shop/src/components/productCard.js';
import 'C:/wamp64/www/ballamas-shop/src/components/style/productGridCustom.css';

const Product = () => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('https://mock.shop/api?query=%7B%20product(id%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F7982905098262%22)%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20cursor%20node%20%7B%20id%20title%20image%20%7B%20url%20%7D%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%7D')
      .then(response => {
        setProduct(response.data.data.product);
      })
      .catch(error => {
        console.error('Error fetching the product data:', error);
      });
  }, []);

  if (!product) {
    return <p>Loading...</p>; 
  }

  const { title, description, featuredImage, variants } = product;

  const handleBuyNow = () => {
    navigate('/checkout', {
      state: {
        products: [
          {
            id: product.id,
            title: title,
            description: description,
            image: featuredImage.url,
            price: parseFloat(variants.edges[0].node.price.amount),
            quantity: 1,
            totalPrice: parseFloat(variants.edges[0].node.price.amount),
          }
        ],
        subtotal: parseFloat(variants.edges[0].node.price.amount)
      }
    });
  };

  const handleAddToCart = () => {
    navigate('/cart', {
      state: {
        product: {
          id: product.id,
          title: title,
          description: description,
          image: featuredImage.url,
          price: parseFloat(variants.edges[0].node.price.amount),
          quantity: 1,
        }
      }
    });
  };

  return (
    <div>
      <section className="shop-details">
        <div className="shop-image">
          <img src={featuredImage.url} alt={title} />
        </div>
        <div className="shop-info">
          <h1>{title}</h1>
          <p className="shop-price">{variants.edges[0].node.price.amount} {variants.edges[0].node.price.currencyCode}</p>
          <p className="shop-color">
            Color: <span>{variants.edges[0].node.title}</span>
          </p>
          <div className="shop-actions">
            <button className="buy-now-btn" onClick={handleBuyNow}>BUY NOW</button>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>ADD TO CART</button>
          </div>
          <p className="shop-description">{description}</p>
        </div>
      </section>
      <div className="custom-product-list">
        <h2>You may also like</h2>
        <div className="custom-product-grid">
          {variants.edges.map((variant, index) => (
            <ProductCard
              key={index}
              image={variant.node.image.url}
              title={variant.node.title}
              price={variant.node.price.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
