'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { currentUser, mockMoods } from '@/data/mockData';
import './settings.css';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <MainLayout>
            <div className="settings-page">
                <div className="page-header">
                    <h1 className="page-title">⚙️ Settings</h1>
                    <p className="page-subtitle">Customize your RetroSpace experience</p>
                </div>

                <div className="settings-container">
                    <div className="settings-tabs card">
                        <button
                            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            👤 Profile
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'appearance' ? 'active' : ''}`}
                            onClick={() => setActiveTab('appearance')}
                        >
                            🎨 Appearance
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
                            onClick={() => setActiveTab('privacy')}
                        >
                            🔒 Privacy
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'notifications' ? 'active' : ''}`}
                            onClick={() => setActiveTab('notifications')}
                        >
                            🔔 Notifications
                        </button>
                    </div>

                    <div className="settings-content card">
                        {activeTab === 'profile' && (
                            <div className="settings-section">
                                <h2 className="section-heading">Profile Settings</h2>

                                <div className="form-group">
                                    <label className="form-label">Display Name</label>
                                    <input type="text" className="input" defaultValue={currentUser.displayName} />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="input" defaultValue={currentUser.username} />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Bio</label>
                                    <textarea className="input" rows={4} defaultValue={currentUser.bio} />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Status</label>
                                    <select className="input">
                                        <option value="online">🟢 Online</option>
                                        <option value="away">🟡 Away</option>
                                        <option value="busy">🔴 Busy</option>
                                        <option value="offline">⚫ Offline</option>
                                    </select>
                                </div>

                                <button className="btn">Save Changes</button>
                            </div>
                        )}

                        {activeTab === 'appearance' && (
                            <div className="settings-section">
                                <h2 className="section-heading">Appearance Settings</h2>

                                <div className="form-group">
                                    <label className="form-label">Choose Your Mood Theme</label>
                                    <div className="mood-selector-grid">
                                        {mockMoods.map((mood) => (
                                            <label key={mood.id} className="mood-selector-item">
                                                <input
                                                    type="radio"
                                                    name="mood"
                                                    value={mood.id}
                                                    defaultChecked={mood.id === currentUser.mood}
                                                />
                                                <div className="mood-selector-card" style={{ borderColor: mood.color }}>
                                                    <span className="mood-selector-emoji">{mood.emoji}</span>
                                                    <span className="mood-selector-name">{mood.name}</span>
                                                    <div className="mood-color-preview" style={{ background: mood.color }}></div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Profile Background</label>
                                    <div className="background-options">
                                        <button className="background-option">Gradient 1</button>
                                        <button className="background-option">Gradient 2</button>
                                        <button className="background-option">Pattern 1</button>
                                        <button className="background-option">Upload Custom</button>
                                    </div>
                                </div>

                                <button className="btn">Apply Theme</button>
                            </div>
                        )}

                        {activeTab === 'privacy' && (
                            <div className="settings-section">
                                <h2 className="section-heading">Privacy Settings</h2>

                                <div className="setting-item">
                                    <div className="setting-info">
                                        <div className="setting-title">Profile Visibility</div>
                                        <div className="setting-desc">Who can see your profile?</div>
                                    </div>
                                    <select className="input" style={{ width: 'auto' }}>
                                        <option>Everyone</option>
                                        <option>Friends Only</option>
                                        <option>Private</option>
                                    </select>
                                </div>

                                <div className="setting-item">
                                    <div className="setting-info">
                                        <div className="setting-title">Daily Pages</div>
                                        <div className="setting-desc">Who can see your daily pages?</div>
                                    </div>
                                    <select className="input" style={{ width: 'auto' }}>
                                        <option>Everyone</option>
                                        <option>Friends Only</option>
                                        <option>Rooms Only</option>
                                    </select>
                                </div>

                                <div className="setting-item">
                                    <div className="setting-info">
                                        <div className="setting-title">Online Status</div>
                                        <div className="setting-desc">Show when you're online</div>
                                    </div>
                                    <label className="toggle-switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>

                                <button className="btn">Save Privacy Settings</button>
                            </div>
                        )}

                        {activeTab === 'notifications' && (
                            <div className="settings-section">
                                <h2 className="section-heading">Notification Settings</h2>

                                <div className="setting-item">
                                    <div className="setting-info">
                                        <div className="setting-title">New Messages</div>
                                        <div className="setting-desc">Get notified of new chat messages</div>
                                    </div>
                                    <label className="toggle-switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>

                                <div className="setting-item">
                                    <div className="setting-info">
                                        <div className="setting-title">Room Posts</div>
                                        <div className="setting-desc">Notifications for room activity</div>
                                    </div>
                                    <label className="toggle-switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>

                                <div className="setting-item">
                                    <div className="setting-info">
                                        <div className="setting-title">Friend Requests</div>
                                        <div className="setting-desc">Get notified of new friend requests</div>
                                    </div>
                                    <label className="toggle-switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>

                                <div className="setting-item">
                                    <div className="setting-info">
                                        <div className="setting-title">Sound Effects</div>
                                        <div className="setting-desc">Play sounds for notifications</div>
                                    </div>
                                    <label className="toggle-switch">
                                        <input type="checkbox" />
                                        <span className="toggle-slider"></span>
                                    </label>
                                </div>

                                <button className="btn">Save Notification Settings</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
