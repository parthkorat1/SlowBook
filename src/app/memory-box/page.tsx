'use client';

import MainLayout from '@/components/layout/MainLayout';
import { mockDailyPages, getUserById } from '@/data/mockData';
import './memory-box.css';

export default function MemoryBoxPage() {
    const allPages = mockDailyPages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <MainLayout>
            <div className="memory-box-page">
                <div className="page-header">
                    <div>
                        <h1 className="page-title">📦 Memory Box</h1>
                        <p className="page-subtitle">Your personal archive of daily pages</p>
                    </div>
                    <button className="btn">📅 Calendar View</button>
                </div>

                <div className="memory-grid">
                    {allPages.map((page) => {
                        const user = getUserById(page.userId);
                        if (!user) return null;

                        return (
                            <div key={page.id} className="memory-card polaroid">
                                <div className="polaroid-photo">
                                    {page.photos && page.photos.length > 0 ? (
                                        <img
                                            src={`https://picsum.photos/seed/memory${page.id}/300/300`}
                                            alt={page.mood}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div className="no-photo">
                                            <span className="mood-emoji-large">{page.mood[0]}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="polaroid-caption">
                                    <div className="memory-date">{new Date(page.date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}</div>
                                    <div className="memory-mood" style={{ color: page.moodColor }}>
                                        {page.mood}
                                    </div>
                                    <p className="memory-text">{page.text.substring(0, 60)}...</p>
                                    {page.music && (
                                        <div className="memory-music">
                                            🎵 {page.music.title}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="memory-stats card panel-glossy">
                    <div className="card-body">
                        <h3>Your Memory Box Stats</h3>
                        <div className="stats-grid">
                            <div className="stat-box">
                                <span className="stat-icon">📔</span>
                                <span className="stat-number">{allPages.length}</span>
                                <span className="stat-text">Total Pages</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-icon">📷</span>
                                <span className="stat-number">{allPages.filter(p => p.photos?.length).length}</span>
                                <span className="stat-text">With Photos</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-icon">🎵</span>
                                <span className="stat-number">{allPages.filter(p => p.music).length}</span>
                                <span className="stat-text">With Music</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
