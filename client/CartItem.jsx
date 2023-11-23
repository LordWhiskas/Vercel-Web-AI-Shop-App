// CartItem.jsx
import React from 'react';
import './CartItem.css'; // Assume this CSS file exists for styling

function CartItem({ item, removeFromCart }) {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;
