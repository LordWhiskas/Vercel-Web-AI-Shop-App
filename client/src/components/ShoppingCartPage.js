import React from 'react';
import Cart from './Cart';
import '../styles/ShoppingCartPage.css';

function ShoppingCartPage({ cartItems, removeFromCart }) {
    return (
        <div className="shopping-cart-page">
            <h1>Your Shopping Cart</h1>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
    );
}

export default ShoppingCartPage;
