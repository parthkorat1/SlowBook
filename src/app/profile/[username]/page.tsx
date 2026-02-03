'use client';

import { use } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { getUserById, getDailyPagesByUserId } from '@/data/mockData';
import './profile.css';

export default function ProfilePage({ params }: { params: Promise<{ username: string }> }) {
    const { username } = use(params);
    const user = getUserById('1'); // Mock - would lookup by username
    const dailyPages = getDailyPagesByUserId('1');

    if (!user) {
        return (
            <MainLayout>
                <div className="page-header">
                    <h1>User not found</h1>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="profile-page" data-mood={user.mood}>
                <div className="profile-header" style={{ background: user.customBackground || 'var(--gradient-header)' }}>
                    <div className="profile-header-content">
                        <div className="avatar avatar-xl">
                            <div className="avatar-placeholder">{user.displayName[0]}</div>
                        </div>
                        <div className="profile-info">
                            <h1 className="profile-name">{user.displayName}</h1>
                            <p className="profile-username">@{user.username}</p>
                            <div className="profile-status">
                                <div className={`status-dot ${user.status}`}></div>
                                <span>{user.status}</span>
                            </div>
                        </div>
                        <button className="btn">✏️ Edit Profile</button>
                    </div>
                </div>

                <div className="profile-content">
                    <div className="profile-main">
                        <div className="profile-bio card panel-glossy">
                            <div className="card-header">About Me</div>
                            <div className="card-body">
                                <p>{user.bio}</p>
                                <div className="profile-stats">
                                    <div className="stat-item">
                                        <span className="stat-value">{dailyPages.length}</span>
                                        <span className="stat-label">Daily Pages</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">12</span>
                                        <span className="stat-label">Rooms</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">48</span>
                                        <span className="stat-label">Friends</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h2 className="section-title">📔 Recent Daily Pages</h2>
                            <div className="daily-pages-grid">
                                {dailyPages.slice(0, 6).map((page) => (
                                    <div key={page.id} className="daily-page-mini card">
                                        <div className="mini-date">{new Date(page.date).toLocaleDateString()}</div>
                                        <div className="mini-mood" style={{ background: page.moodColor }}>
                                            {page.mood}
                                        </div>
                                        <p className="mini-text">{page.text.substring(0, 80)}...</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="profile-sidebar">
                        <div className="card panel-glossy">
                            <div className="card-header">🎨 Customization</div>
                            <div className="card-body">
                                <div className="custom-option">
                                    <span>Background</span>
                                    <button className="btn btn-small">Change</button>
                                </div>
                                <div className="custom-option">
                                    <span>Theme Color</span>
                                    <div className="color-preview" style={{ background: `var(--mood-primary)` }}></div>
                                </div>
                                <div className="custom-option">
                                    <span>Music</span>
                                    <button className="btn btn-small">Add Song</button>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">📝 Guestbook</div>
                            <div className="card-body">
                                <textarea className="input" placeholder="Leave a message..." rows={3}></textarea>
                                <button className="btn btn-small w-full mt-sm">Sign Guestbook</button>
                                <div className="guestbook-entries">
                                    <div className="guestbook-entry">
                                        <strong>Mike 🎸:</strong> Cool profile!
                                    </div>
                                    <div className="guestbook-entry">
                                        <strong>Emma ☀️:</strong> Love your vibe ✨
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
