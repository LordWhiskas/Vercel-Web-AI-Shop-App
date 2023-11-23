// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ShoppingCartPage from './ShoppingCartPage'; // Make sure this component is exported from its file
import '../styles/App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    return (
        <BrowserRouter>
            <div className="app">
                <nav>
                    <Link to="/">
                        <img src="../assets/cart.png" alt="Logo" className="logo" />
                    </Link>
                    <Link to="/cart" className="cart-link">
                        Cart ({cartItems.length})
                    </Link>
                </nav>
                <Routes>
                    <Route path="/cart" element={<ShoppingCartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
                    <Route path="/" element={<Home addToCart={addToCart} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
