import React, { useState, useContext } from 'react';
import { CategoryContext } from './CategoryContext'; // Import the context you created
import '../styles/Chat.css';

const Chat = ({ onSendMessage }) => {
    const [userInput, setUserInput] = useState('');
    const [isSending, setIsSending] = useState(false);
    const { setCategory } = useContext(CategoryContext); // Use the context to set the selected category
    const [messages, setMessages] = useState([]);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSend = async () => {
        if (userInput.trim()) {
            setIsSending(true);
            const response = await onSendMessage(userInput);
            setIsSending(false);
            setUserInput(''); // Clear the input after sending
            setMessages([...messages, { role: 'user', content: userInput }, { role: 'assistant', content: response }]);
        }
    };

    const handleCategorySelect = (category) => {
        setCategory(category); // Set the selected category in the context
    };

    return (
        <div className="chat-container">
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        {msg.content}
                        {/* If the message is from the assistant and contains categories, render buttons */}
                        {msg.role === 'assistant' && msg.content.includes('Categories:') && (
                            <div className="category-buttons-container">
                                {msg.content.match(/Categories:\s\[(.*?)\]/)[1].split(', ').map((category, idx) => (
                                    <button key={idx} onClick={() => handleCategorySelect(category)} className="category-button">
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                {isSending && <div className="typing-indicator"></div>}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
