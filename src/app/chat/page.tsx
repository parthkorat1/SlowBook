'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { mockUsers, mockChatMessages, getChatMessages } from '@/data/mockData';
import './chat.css';

export default function ChatPage() {
    const [selectedUser, setSelectedUser] = useState(mockUsers[2]);
    const [openChats, setOpenChats] = useState<string[]>([mockUsers[2].id]);
    const [message, setMessage] = useState('');

    const onlineFriends = mockUsers.filter(u => u.status !== 'offline');

    return (
        <MainLayout>
            <div className="chat-page">
                <div className="chat-container">
                    <div className="friends-panel card">
                        <div className="panel-header">
                            <h3>💬 Messenger</h3>
                            <span className="online-count">{onlineFriends.length} online</span>
                        </div>
                        <div className="friends-search">
                            <input type="text" className="input" placeholder="Search friends..." />
                        </div>
                        <div className="friends-list-chat">
                            {onlineFriends.map((friend) => (
                                <div
                                    key={friend.id}
                                    className={`friend-chat-item ${selectedUser?.id === friend.id ? 'active' : ''}`}
                                    onClick={() => {
                                        setSelectedUser(friend);
                                        if (!openChats.includes(friend.id)) {
                                            setOpenChats([...openChats, friend.id]);
                                        }
                                    }}
                                >
                                    <div className="friend-avatar-container">
                                        <div className="avatar avatar-sm">
                                            <div className="avatar-placeholder">{friend.displayName[0]}</div>
                                        </div>
                                        <div className={`status-dot ${friend.status}`}></div>
                                    </div>
                                    <div className="friend-chat-info">
                                        <div className="friend-chat-name">{friend.displayName}</div>
                                        <div className="friend-chat-status">{friend.status}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="chat-main">
                        {selectedUser ? (
                            <div className="chat-window card">
                                <div className="chat-header">
                                    <div className="flex items-center gap-sm">
                                        <div className="avatar avatar-sm">
                                            <div className="avatar-placeholder">{selectedUser.displayName[0]}</div>
                                        </div>
                                        <div>
                                            <div className="chat-user-name">{selectedUser.displayName}</div>
                                            <div className="chat-user-status">
                                                <div className={`status-dot ${selectedUser.status}`}></div>
                                                <span>{selectedUser.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-small btn-secondary">⚙️</button>
                                </div>

                                <div className="chat-messages">
                                    {getChatMessages('1', selectedUser.id).map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`message ${msg.fromUserId === '1' ? 'sent' : 'received'}`}
                                        >
                                            <div className="message-bubble">
                                                <p>{msg.content}</p>
                                                <span className="message-time">
                                                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="chat-input-container">
                                    <button className="emoji-btn">😊</button>
                                    <input
                                        type="text"
                                        className="input chat-input"
                                        placeholder="Type a message..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                setMessage('');
                                            }
                                        }}
                                    />
                                    <button className="btn btn-small">Send</button>
                                </div>
                            </div>
                        ) : (
                            <div className="chat-empty">
                                <span className="empty-icon">💬</span>
                                <p>Select a friend to start chatting</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
