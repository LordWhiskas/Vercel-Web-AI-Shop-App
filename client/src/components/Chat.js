import React, { useState } from 'react';
import '../styles/Chat.css';

const Chat = ({ onSendMessage, messages }) => {
    const [userInput, setUserInput] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSend = async () => {
        if (userInput.trim()) {
            setIsSending(true);
            await onSendMessage(userInput);
            setIsSending(false);
            setUserInput(''); // Clear the input after sending
        }
    };

    return (
        <div className="chat-container">
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        {msg.content}
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
