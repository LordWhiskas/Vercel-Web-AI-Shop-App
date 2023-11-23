// App.js
import React, { useState } from 'react';
import Home from './Home';
import Cart from './Cart';
import './Home.css';
import './ProductCard.css';
import './Cart.css';
import './CartItem.css';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            // Check if product is already in the cart
            const isProductInCart = prevItems.find((item) => item.id === product.id);

            if (isProductInCart) {
                // If so, increment the quantity
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // If not, add the product to the cart with quantity 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.reduce((acc, item) => {
                if (item.id === productId) {
                    if (item.quantity > 1) {
                        // If the quantity is more than one, decrement it
                        acc.push({ ...item, quantity: item.quantity - 1 });
                    }
                } else {
                    // Keep the item in the cart
                    acc.push(item);
                }
                return acc;
            }, [])
        );
    };

    return (
        <div className="App">
            {/* You can use React Router for routing if you have multiple pages */}
            <Home addToCart={addToCart} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    );
}

export default App;
