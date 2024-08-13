import React, { useState, useEffect } from 'react';
import ProductCard from './productCard.js';
import './style/productList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(6); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://mock.shop/api?query=%7B%20products(first%3A%2020)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20featuredImage%20%7B%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D');
        const data = await response.json();
        
        const productsFromAPI = data.data.products.edges.map(({ node }) => ({
          image: node.featuredImage ? node.featuredImage.url : '',
          title: node.title, 
          price: node.variants.edges[0].node.price.amount, 
        }));

        setProducts(productsFromAPI);
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleViewMore = () => {
    setVisibleProducts(products.length); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-list">
      <div className="header">
        <h1>Discover the latest trends in summer fashion. Shop now and refresh your wardrobe
          <div>
        </div>
          with our stylish summer shirts.</h1>
        <div className="filters">
          <button className='All'>All 132</button>
          <button>Accessories 13</button>
          <button>Featured 17</button>
          <button>Unisex 6</button>
        </div>
      </div>
      <div className="product-grid">
        {products.slice(0, visibleProducts).map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      {visibleProducts < products.length && (
        <button className="view-more" onClick={handleViewMore}>
          View More
        </button>
      )}
    </div>
  );
};

export default ProductList;
