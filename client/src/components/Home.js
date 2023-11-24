// Home.js
import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';
import '../styles/Home.css';


function Home({ addToCart }) {
    const [filter, setFilter] = useState('All');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
                console.log(data);
                setProducts(data);
                setLoading(false); // Update loading state when data is fetched
            } catch (error) {
                console.error(error);
                setLoading(false); // Handle errors and update loading state
            }
        };

        fetchData().catch(console.error);
    }, []);

    return (
        <div>
            <div>
                <button onClick={() => handleCategoryChange('All')}>All Categories</button>
                <button onClick={() => handleCategoryChange('Watch')}>Watches</button>
                <button onClick={() => handleCategoryChange('Shoes')}>Shoes</button>
                <button onClick={() => handleCategoryChange('Headphones')}>Headphones</button>
                <button onClick={() => handleCategoryChange('Lamp')}>Lamp</button>
                <button onClick={() => handleCategoryChange('Wallet')}>Wallet</button>
                <button onClick={() => handleCategoryChange('Backpack')}>Backpack</button>
                <button onClick={() => handleCategoryChange('Bottle')}>Bottle</button>
                <button onClick={() => handleCategoryChange('Mat')}>Mat</button>
                <button onClick={() => handleCategoryChange('Mouse')}>Mouse</button>
                <button onClick={() => handleCategoryChange('Jacket')}>Jacket</button>
                <button onClick={() => handleCategoryChange('T-Shirt')}>T-Shirt</button>
                <button onClick={() => handleCategoryChange('Sunglasses')}>Sunglasses</button>
                <button onClick={() => handleCategoryChange('Hat')}>Hat</button>
                <button onClick={() => handleCategoryChange('Wristband')}>Wristband</button>
                <button onClick={() => handleCategoryChange('Socks')}>Socks</button>
            </div>
            {loading ? ( // Conditionally render loading animation
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
        </div>
    );
}

export default Home;
