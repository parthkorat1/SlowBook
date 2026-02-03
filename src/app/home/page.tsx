'use client';

import MainLayout from '@/components/layout/MainLayout';
import { mockPosts, mockDailyPages, getUserById } from '@/data/mockData';
import './home.css';

export default function HomePage() {
    const allContent = [
        ...mockDailyPages.map(dp => ({ ...dp, type: 'daily' as const })),
        ...mockPosts.filter(p => !p.roomId).map(p => ({ ...p, type: 'post' as const }))
    ].sort((a, b) => new Date(b.timestamp || b.date).getTime() - new Date(a.timestamp || a.date).getTime());

    return (
        <MainLayout>
            <div className="home-page">
                <div className="page-header">
                    <h1 className="page-title">🏠 Home Feed</h1>
                    <p className="page-subtitle">See what your friends are up to</p>
                </div>

                <div className="feed-container">
                    {allContent.map((item) => {
                        const user = getUserById(item.userId);
                        if (!user) return null;

                        if (item.type === 'daily') {
                            return (
                                <div key={item.id} className="feed-item daily-page-card card animate-fade-in">
                                    <div className="card-header">
                                        <div className="flex items-center gap-sm">
                                            <div className="avatar">
                                                <div className="avatar-placeholder">{user.displayName[0]}</div>
                                            </div>
                                            <div>
                                                <div className="user-name">{user.displayName}</div>
                                                <div className="post-meta">📔 Daily Page • {new Date(item.date).toLocaleDateString()}</div>
                                            </div>
                                        </div>
                                        <div className="mood-badge" style={{ background: item.moodColor }}>
                                            {item.mood}
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p className="daily-text">{item.text}</p>
                                        {item.photos && item.photos.length > 0 && (
                                            <div className="photo-grid">
                                                {item.photos.map((photo, idx) => (
                                                    <div key={idx} className="photo-placeholder">
                                                        📷 Photo {idx + 1}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {item.music && (
                                            <div className="music-player">
                                                <span className="music-icon">🎵</span>
                                                <div className="music-info">
                                                    <div className="music-title">{item.music.title}</div>
                                                    <div className="music-artist">{item.music.artist}</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="card-footer">
                                        <button className="action-btn">❤️ Like</button>
                                        <button className="action-btn">💬 Comment</button>
                                        <button className="action-btn">🔗 Share</button>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div key={item.id} className="feed-item post-card card animate-fade-in">
                                    <div className="card-header">
                                        <div className="flex items-center gap-sm">
                                            <div className="avatar">
                                                <div className="avatar-placeholder">{user.displayName[0]}</div>
                                            </div>
                                            <div>
                                                <div className="user-name">{user.displayName}</div>
                                                <div className="post-meta">{new Date(item.timestamp).toLocaleString()}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p>{item.content}</p>
                                        {item.images && item.images.length > 0 && (
                                            <div className="photo-grid">
                                                {item.images.map((img, idx) => (
                                                    <div key={idx} className="photo-placeholder">
                                                        📷 Image {idx + 1}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="card-footer">
                                        <button className="action-btn">❤️ {item.likes} Likes</button>
                                        <button className="action-btn">💬 {item.comments.length} Comments</button>
                                        <button className="action-btn">🔗 Share</button>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </MainLayout>
    );
}
