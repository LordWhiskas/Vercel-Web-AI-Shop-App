// App.js
import React, {useState} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from './Home';
import ShoppingCartPage from './ShoppingCartPage'; // Make sure this component is exported from its file
import '../styles/App.css';
import cartIcon from '../assets/cart.png';
import Chat from './Chat';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [chatMessages, setChatMessages] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
    };

    const handleSendMessage = async (userInput) => {
        const response = await fetchAssistantResponse(userInput);
        let assistant = response.response;
        let findCategory = response.findCategory;
        setChatMessages(prevMessages => [...prevMessages, { role: 'user', content: userInput }, { role: 'assistant', content: assistant, findCategory: findCategory }]);
    };

    // Inside your component or utility function
    const fetchAssistantResponse = async (userInput) => {
        try {
            const response = await fetch('/api/openaiChat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: userInput }),
            });
            console.log(JSON.stringify({ content: userInput }));
            let result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            console.error("Fetching error: ", error);
        }
    };


    const addToCart = (product) => {
        // Check if the product is already in the cart
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            // Increase the quantity
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            // Add the new product with quantity 1
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        // Check if the product's quantity is greater than 1
        const existingItem = cartItems.find(item => item.id === productId);
        if (existingItem && existingItem.quantity > 1) {
            // Decrease the quantity
            setCartItems(cartItems.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            ));
        } else {
            // Remove the product
            setCartItems(cartItems.filter(item => item.id !== productId));
        }
    };

    return (
        <BrowserRouter>
            <div className="app">
                <nav>
                    <Link to="/">
                        <img src={cartIcon} alt="Logo" className="logo" />
                    </Link>
                    <Link to="/cart" className="cart-link">
                        Cart ({cartItems.length})
                    </Link>
                    <Link to="/chat" className="chat-link">
                        Chat with Assistant
                    </Link>
                </nav>
                <Routes>
                    <Route path="/cart" element={<ShoppingCartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
                    <Route path="/" element={<Home addToCart={addToCart} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} />
                    <Route path="/chat" element={<Chat onSendMessage={handleSendMessage} messages={chatMessages} onCategorySelect={handleCategorySelection} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
