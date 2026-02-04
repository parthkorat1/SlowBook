'use client';

import { use } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { getRoomById, getPostsByRoomId, getUserById } from '@/data/mockData';
import '@/app/rooms/rooms.css';
import './room.css';

interface RoomPageProps {
    params: Promise<{ id: string }>;
}

export default function RoomPage({ params }: RoomPageProps) {
    const { id } = use(params);
    const room = getRoomById(id);
    const posts = getPostsByRoomId(id);

    if (!room) {
        return (
            <MainLayout>
                <div className="page-header">
                    <h1>Room not found</h1>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="room-page">
                <div className="room-header card">
                    <div className="room-header-content">
                        <div className="room-avatar">
                            {room.avatar && room.avatar.startsWith('/rooms/') ? (
                                <img
                                    src={`https://via.placeholder.com/200x200/3B5998/FFFFFF?text=${encodeURIComponent(room.name.substring(0, 10))}`}
                                    alt={room.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
                                />
                            ) : (
                                <div className="room-icon">{room.avatar || '👥'}</div>
                            )}
                        </div>
                        <div className="room-header-info">
                            <h1 className="room-title">{room.name}</h1>
                            <p className="room-desc">{room.description}</p>
                            <div className="room-stats">
                                <span>👤 {room.members.length} members</span>
                                <span>•</span>
                                <span>Created {new Date(room.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <button className="btn">⚙️ Settings</button>
                    </div>
                </div>

                <div className="room-content">
                    <div className="room-feed">
                        <div className="post-composer card">
                            <textarea
                                className="input"
                                placeholder="Share something with the room..."
                                rows={3}
                            />
                            <div className="composer-actions">
                                <button className="btn btn-small btn-secondary">📷 Photo</button>
                                <button className="btn btn-small">Post</button>
                            </div>
                        </div>

                        <div className="posts-list">
                            {posts.map((post) => {
                                const user = getUserById(post.userId);
                                if (!user) return null;

                                return (
                                    <div key={post.id} className="post-card card">
                                        <div className="card-header">
                                            <div className="flex items-center gap-sm">
                                                <div className="avatar">
                                                    <div className="avatar-placeholder">{user.displayName[0]}</div>
                                                </div>
                                                <div>
                                                    <div className="user-name">{user.displayName}</div>
                                                    <div className="post-meta">{new Date(post.timestamp).toLocaleString()}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p>{post.content}</p>
                                            {post.images && post.images.length > 0 && (
                                                <div className="photo-grid" style={{ marginTop: '12px' }}>
                                                    {post.images.map((img, idx) => {
                                                        // Themed colors based on post content
                                                        const color = post.content.includes('music') || post.content.includes('band') ? 'FF69B4' :
                                                            post.content.includes('gaming') || post.content.includes('game') ? '9B59B6' :
                                                                post.content.includes('art') || post.content.includes('painting') ? 'FF8C42' :
                                                                    post.content.includes('café') || post.content.includes('coffee') ? '8B4513' :
                                                                        '17A2B8';

                                                        return (
                                                            <img
                                                                key={idx}
                                                                src={`https://picsum.photos/seed/roompost${post.id}${idx}/400/300`}
                                                                alt={`Post image ${idx + 1}`}
                                                                style={{ width: '100%', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                        <div className="card-footer">
                                            <button className="action-btn">❤️ {post.likes}</button>
                                            <button className="action-btn">💬 {post.comments.length}</button>
                                            <button className="action-btn">🔗 Share</button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="room-sidebar">
                        <div className="card">
                            <div className="card-header">Members ({room.members.length})</div>
                            <div className="card-body">
                                <div className="members-list">
                                    {room.members.map((memberId) => {
                                        const member = getUserById(memberId);
                                        if (!member) return null;

                                        return (
                                            <div key={memberId} className="member-item">
                                                <div className="avatar avatar-sm">
                                                    <div className="avatar-placeholder">{member.displayName[0]}</div>
                                                </div>
                                                <div className="member-info">
                                                    <div className="member-name">{member.displayName}</div>
                                                    <div className={`status-dot ${member.status}`}></div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
