import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/Home.css';
import {useRef} from 'react';

function Home({ addToCart }) {
    const [filter, setFilter] = useState('All');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [infoMessage, setInfoMessage] = useState(''); // State to hold the info message
    const ref = useRef(null);

    const getFilteredProducts = () => {
        return filter === 'All' ? products : products.filter(product => product.category === filter);
    };


    const handleAddToCart = (product) => {
        addToCart(product); // Call the original addToCart function
        setInfoMessage(`${product.name} has been added to your cart!`); // Set the informational message
        setTimeout(() => setInfoMessage(''), 3000); // Clear the message after 3 seconds
    };

    const handleCategoryChange = (category) => {
        setFilter(category);
        ref.current?.scrollIntoView({behavior: 'smooth'});
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
            {infoMessage && <div className="info-message">{infoMessage}</div>}
            {loading ? (
                <div className="loading-animation">
                    <div className="loading-spinner"></div>
                </div>
            ) : (
                // Apply the ref to the product grid container
                <div className="product-grid" ref={ref}>
                    {getFilteredProducts().map(product => (
                        <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;