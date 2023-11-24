import React, { useEffect, useState, useRef } from 'react';
import ProductCard from './ProductCard';
import '../styles/Home.css';

function Home({ addToCart, selectedCategory, setSelectedCategory }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [infoMessage, setInfoMessage] = useState('');
    const ref = useRef(null);

    const getFilteredProducts = () => {
        return selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        setInfoMessage(`${product.name} has been added to your cart!`);
        setTimeout(() => setInfoMessage(''), 3000);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProducts(data);
                setLoading(false);
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
                    <button key={index} onClick={() => setSelectedCategory(category)}>
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
