// Home.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Assume this component exists
import './Home.css'; // Assume this CSS file exists for styling

function Home() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        // TODO: Fetch the products from your backend API
        // This is a placeholder example
        const fetchProducts = async () => {
            console.log("We are here");
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, [filter]);

    return (
        <div>
            <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                <option value="all">All Categories</option>
                {/* Add more categories as needed */}
            </select>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Home;
