// Home.js
import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';
import '../styles/Home.css';

const fakeProductsAPI = () => {
    return fetch('api/products') // Return the promise that `fetch` returns
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
            throw error; // Re-throw the error for the caller to handle if needed
        });
};


function Home({ addToCart }) {
    const [filter, setFilter] = useState('All');
    const [products, setProducts] = useState([]);

    const getFilteredProducts = () => {
        return filter === 'All' ? products : products.filter(product => product.category === filter);
    };

    const handleCategoryChange = (category) => {
        setFilter(category);
    };

    useEffect(() => {
        fakeProductsAPI()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);


    return (
        <div>
            <div>
                <button onClick={() => handleCategoryChange('All')}>All Categories</button>
                <button onClick={() => handleCategoryChange('Watch')}>Watches</button>
                <button onClick={() => handleCategoryChange('Shoes')}>Shoes</button>
            </div>
            <div className="product-grid">
                {getFilteredProducts().map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
}

export default Home;
