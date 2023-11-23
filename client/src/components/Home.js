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
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fakeProductsAPI()
            .then((data) => {
                // Use the data to set state, etc.
                setProducts(data);
            })
            .catch((error) => {
                // Maybe set an error state to display an error message, etc.
                console.error('Error fetching products:', error);
            });
    }, []); // Empty dependency array means this effect runs once when the component mounts



    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default Home;
