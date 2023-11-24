import React, { useState } from 'react';
import '../styles/Chat.css';
import { useNavigate } from 'react-router-dom';

const Chat = ({ onSendMessage, messages, onCategorySelect }) => {
    const [userInput, setUserInput] = useState('');
    const [isSending, setIsSending] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSend = async () => {
        if (userInput.trim()) {
            setIsSending(true);
            await onSendMessage(userInput);
            setIsSending(false);
            setUserInput('');
        }
    };

    const handleCategoryClick = (category) => {
        onCategorySelect(category);
        navigate('/');
    };

    return (
        <div className="chat-container">
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        {msg.content}
                        {/* Render category buttons if available */}
                        {msg.findCategory && (
                            <div className="category-buttons-container">
                                {msg.findCategory.split(', ').map((category, idx) => (
                                    <button key={idx} onClick={() => handleCategoryClick(category)} className="category-button">
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
                <input type="text" value={userInput} onChange={handleInputChange} placeholder="Type your message here..." />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
