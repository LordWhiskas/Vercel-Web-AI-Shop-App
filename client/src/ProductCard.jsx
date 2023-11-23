// ProductCard.jsx
import React from 'react';
import './ProductCard.css'; // Assume this CSS file exists for styling

function ProductCard({ product }) {
    // This function would be passed down from a parent component
    // and would handle adding the product to the cart
    const handleAddToCart = () => {
        console.log('Add to cart not implemented', product);
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
