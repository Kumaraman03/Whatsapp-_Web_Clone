import './App.css';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
// import { fetchMessages, sendMessage } from './api'; // disabling for now

function App() {
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = () => {
    // Mock messages instead of API call
    const mockData = [
      {
        _id: '1',
        wa_id: '123',
        name: 'Mrinal Kislay',
        message: 'Hello there!',
        timestamp: new Date().toISOString(),
        status: 'read',
        lastMessage: 'Hello there!',
      },
      {
        _id: '2',
        wa_id: '456',
        name: 'Aman Vats',
        message: 'Hi! How are you?',
        timestamp: new Date().toISOString(),
        status: 'unread',
        lastMessage: 'Hi! How are you?',
      },
      {
        _id: '3',
        wa_id: '457',
        name: 'Vishal Nandal',
        message: 'Hey !!',
        timestamp: new Date().toISOString(),
        status: 'unread',
        lastMessage: 'Hey !!',
      },
      {
        _id: '4',
        wa_id: '458',
        name: 'Lakshay Sharma',
        message: 'Hey buddy!!',
        timestamp: new Date().toISOString(),
        status: 'read',
        lastMessage: 'Hey buddy!!',
      },
      {
        _id: '5',
        wa_id: '459',
        name: 'Ananya',
        message: 'Hii',
        timestamp: new Date().toISOString(),
        status: 'read',
        lastMessage: 'Hii',
      },
      {
        _id: '6',
        wa_id: '450',
        name: 'Money',
        message: 'Hello jii',
        timestamp: new Date().toISOString(),
        status: 'read',
        lastMessage: 'Hello jii',
      },
    ];
    
    setMessages(mockData);
  };

  const uniqueUsers = [
    ...new Map(messages.map((msg) => [msg.wa_id, msg])).values(),
  ];

  const handleSend = (text) => {
    if (selectedUser) {
      const newMsg = {
        _id: String(messages.length + 1),
        wa_id: selectedUser.wa_id,
        name: selectedUser.name,
        message: text,
        timestamp: new Date().toISOString(),
        status: 'unread',
        lastMessage: text,
      };
      setMessages([...messages, newMsg]);
    }
  };

  const filteredMsgs = messages.filter(
    (m) => m.wa_id === selectedUser?.wa_id
  );

  return (
    <div className="flex h-screen">
      <Sidebar users={uniqueUsers} selectUser={setSelectedUser} />
      <div className="flex flex-col flex-1">
        {selectedUser ? (
          <>
            <ChatWindow messages={filteredMsgs} onSend={handleSend} />
          </>
        ) : (
          <div className="flex items-center justify-center flex-1">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
