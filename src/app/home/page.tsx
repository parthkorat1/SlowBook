'use client';

import MainLayout from '@/components/layout/MainLayout';
import { mockPosts, mockDailyPages, getUserById } from '@/data/mockData';
import './home.css';

export default function HomePage() {
    const allContent = [
        ...mockDailyPages.map(dp => ({ ...dp, type: 'daily' as const })),
        ...mockPosts.filter(p => !p.roomId).map(p => ({ ...p, type: 'post' as const }))
    ].sort((a, b) => {
        const aTime = 'timestamp' in a ? new Date(a.timestamp).getTime() : new Date(a.date).getTime();
        const bTime = 'timestamp' in b ? new Date(b.timestamp).getTime() : new Date(b.date).getTime();
        return bTime - aTime;
    });

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
                                                {item.photos.map((photo, idx) => {
                                                    // Themed colors based on daily page content
                                                    const color = item.text.includes('beach') || item.text.includes('sunset') ? '17A2B8' :
                                                        item.text.includes('guitar') || item.text.includes('music') ? 'FF69B4' :
                                                            item.text.includes('coffee') || item.text.includes('photography') ? '8B4513' :
                                                                item.text.includes('gaming') || item.text.includes('game') ? '9B59B6' :
                                                                    item.text.includes('painting') || item.text.includes('art') ? 'FF8C42' :
                                                                        'FFD700';

                                                    return (
                                                        <div
                                                            key={idx}
                                                            style={{
                                                                width: '100%',
                                                                height: '200px',
                                                                background: `linear-gradient(135deg, #${color} 0%, #${color}DD 100%)`,
                                                                borderRadius: 'var(--radius-sm)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                color: 'white',
                                                                fontSize: '24px',
                                                                fontWeight: 'bold'
                                                            }}
                                                        >
                                                            📷 {idx + 1}
                                                        </div>
                                                    );
                                                })}
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
                                                {item.images.map((img, idx) => {
                                                    // Themed colors based on post content
                                                    const color = item.content.includes('music') || item.content.includes('band') ? 'FF69B4' :
                                                        item.content.includes('gaming') || item.content.includes('game') ? '9B59B6' :
                                                            item.content.includes('art') || item.content.includes('painting') ? 'FF8C42' :
                                                                item.content.includes('café') || item.content.includes('coffee') ? '8B4513' :
                                                                    '17A2B8';

                                                    return (
                                                        <img
                                                            key={idx}
                                                            src={`https://picsum.photos/seed/post${item.id}${idx}/400/300`}
                                                            alt={`Post image ${idx + 1}`}
                                                            style={{ width: '100%', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
                                                        />
                                                    );
                                                })}
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
