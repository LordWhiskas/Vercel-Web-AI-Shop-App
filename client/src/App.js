// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TODO: Fetch products from your backend API and set products
  }, []);

  const [category, setCategory] = useState('all');

// Add a function to update the category
  const filterByCategory = (newCategory) => {
    setCategory(newCategory);
  };

// Adjust your useEffect to fetch products based on the selected category
  useEffect(() => {
    // Fetch products from your backend API based on category
  }, [category]);

// Now, filter the products before rendering
  const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

  return (
      <div className="product-grid">
        {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                {/* Add to Cart Button */}
                <button>Add to Cart</button>
              </div>
            </div>
        ))}
      </div>
  );
}

export default App;
