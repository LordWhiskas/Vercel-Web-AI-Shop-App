// ProductCard.js
import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product, addToCart }) {
    const imageUrl = process.env.PUBLIC_URL + product.image;
    console.log(imageUrl);
    return (
        <div className="product-card">
            <img src={imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
