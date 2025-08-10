import React from 'react';
import './ChatWindow.css';
import MessageInput from './MessageInput';

const ChatWindow = ({ messages, onSend }) => (
  <div className="chat-window">
    <div className="messages">
      {messages.map((msg) => (
        <div
          key={msg._id}
          className={`message ${msg.status === 'read' ? 'sent' : 'received'}`}
        >
          <p>{msg.message}</p>
          <span className="message-timestamp">
            {new Date(msg.timestamp).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
    <MessageInput onSend={onSend} />
  </div>
);

export default ChatWindow;
