import React from 'react';

function Cart({ cartItems, removeFromCart }) {
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length > 0 ? (
                cartItems.map(item => (
                    <div key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
            <div className="total-price">Total: ${getTotalPrice()}</div>
        </div>
    );
}

export default Cart;