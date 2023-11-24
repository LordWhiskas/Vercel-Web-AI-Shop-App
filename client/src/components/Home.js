import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/Home.css';

function Home({ addToCart }) {
    const [filter, setFilter] = useState('All');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [infoMessage, setInfoMessage] = useState(''); // State to hold the info message

    const handleAddToCart = (product) => {
        addToCart(product); // This is your existing addToCart function
        setInfoMessage(`${product.name} has been added to your cart!`); // Set info message
        setTimeout(() => setInfoMessage(''), 3000); // Clear the message after 3 seconds
    };

    const getFilteredProducts = () => {
        return filter === 'All' ? products : products.filter(product => product.category === filter);
    };

    const handleCategoryChange = (category) => {
        setFilter(category);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProducts(data);
                setLoading(false);

                // Extract categories from products
                const uniqueCategories = new Set(data.map(product => product.category));
                setCategories(['All', ...uniqueCategories]);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData().catch(console.error);
    }, []);

    return (
        <div>
            <div className="category-buttons">
                {categories.map((category, index) => (
                    <button key={index} onClick={() => handleCategoryChange(category)}>
                        {category}
                    </button>
                ))}
            </div>
            {loading ? (
                <div className="loading-animation">
                    <div className="loading-spinner"></div>
                </div>
            ) : (
                <div className="product-grid">
                    {getFilteredProducts().map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            )}
            {infoMessage && <div className="info-message">{infoMessage}</div>}
        </div>
    );
}

export default Home;