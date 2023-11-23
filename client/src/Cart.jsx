// Cart.jsx
import React, { useState } from 'react';
import CartItem from './CartItem'; // Assume this component exists
import './Cart.css'; // Assume this CSS file exists for styling

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length > 0 ? (
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
            <div className="total-price">Total: ${getTotalPrice()}</div>
        </div>
    );
}

export default Cart;
